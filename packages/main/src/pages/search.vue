<script setup lang="ts">
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { useReachBottom, useShot } from '@/composables'

const {
  shots,
  shotId,
  hasNext,
  q,
  showCollectionModal,
  likeOrUnlikeShot,
  loadShots,
  searchByType,
} = useShot()
const {
  reachBottom,
  removeScrollListener,
} = useReachBottom()
const route = useRoute()
const qType = ref('shots')

watch(() => route.fullPath, async () => {
  q.value = route.fullPath.split('/')[2]
  await loadShots(true, qType.value)
}, {
  immediate: true,
})

watchEffect(async () => {
  if (reachBottom.value) {
    await loadShots()
    if (!hasNext.value)
      removeScrollListener()
  }
})

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
    <FilterSubNav />
    <div class="py-2 px-[3vw]">
      <div class="min-h-fit dark:border-gray-700">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
          <div v-for="s in shots" :key="s._id">
            <Shot v-show="qType === 'shots'" :shot="s" @save="saveShot" @like="likeOrUnlikeShotFn" />
          </div>
        </div>
        <p v-if="!hasNext" class="text-center mt-4 text-sm">
          您已到达列表末尾
        </p>
      </div>
      <SaveShotModal v-if="shotId" v-model:show="showCollectionModal" :shot-id="shotId" />
    </div>
  </div>
</template>
