<script setup lang="ts">
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { useReachBottom, useShot } from '@/composables'

const {
  shots,
  users,
  shotId,
  resetPage,
  hasNext,
  q,
  showCollectionModal,
  likeOrUnlikeShot,
  loadShotsOrMembers,
  searchByType,
} = useShot()
const {
  reachBottom,
  removeScrollListener,
} = useReachBottom()
const route = useRoute()
const qType = ref('shots')

watch(() => route.fullPath, async () => {
  q.value = route.fullPath.split('/').at(-1) as string
  if (route.fullPath.split('/').length === 4)
    qType.value = 'members'
  else
    qType.value = 'shots'
  resetPage.value = true
  await loadShotsOrMembers(qType.value)
}, {
  immediate: true,
})

watchEffect(async () => {
  resetPage.value = false
  if (reachBottom.value) {
    await loadShotsOrMembers(qType.value)
    if (!hasNext.value)
      removeScrollListener()
  }
})

const currentSearchQ = computed(() => decodeURI(route.fullPath.split('/').at(-1) as string))

const saveShot = async (id: string) => {
  shotId.value = id
  showCollectionModal.value = true
}

const likeOrUnlikeShotFn = async (shotId: string, liked: boolean) => {
  await likeOrUnlikeShot(shotId, liked)
}

const search = (_q: string, _qType: 'shots' | 'members') => {
  if (_q === '')
    return
  qType.value = _qType
  searchByType(_q, _qType)
}
</script>

<template>
  <div>
    <div class="md:flex md:justify-center">
      <SearchInput v-model:q-type="qType" @search="search" />
    </div>
    <h1 class="font-bold text-4xl text-center my-3">
      {{ currentSearchQ }}
    </h1>
    <FilterSubNav v-if="qType === 'shots'" />
    <div class="py-2 px-[3vw]">
      <div class="min-h-fit dark:border-gray-700">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
          <template v-if="qType === 'shots'">
            <div v-for="s in shots" :key="s._id">
              <Shot v-show="qType === 'shots'" :shot="s" @save="saveShot" @like="likeOrUnlikeShotFn" />
            </div>
          </template>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <template v-if="qType === 'members'">
            <div v-for="u in users" :key="u._id">
              <UserInfoCard :user="u" />
            </div>
          </template>
        </div>
        <p v-if="!hasNext" class="text-center mt-4 text-sm">
          {{ $t('nav.reach_bottom') }}
        </p>
      </div>
      <SaveShotModal v-if="shotId" v-model:show="showCollectionModal" :shot-id="shotId" />
    </div>
  </div>
</template>
