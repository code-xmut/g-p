<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'
import { useReachBottom, useShot } from '@/composables'

const {
  q,
  sort,
  shots,
  shotId,
  resetPage,
  hasNext,
  showCollectionModal,
  likeOrUnlikeShot,
  loadShotsOrMembers,
} = useShot()
const {
  reachBottom,
} = useReachBottom()
const condition = ref('')

onMounted(async () => {
  await loadShotsOrMembers()
})

watchEffect(async () => {
  resetPage.value = false
  if (reachBottom.value)
    await loadShotsOrMembers('shots', condition.value)
})

const isLogged = computed(() => {
  return !!localStorage.getItem('token')
})

const saveShot = async (id: string) => {
  shotId.value = id
  showCollectionModal.value = true
}

const likeOrUnlikeShotFn = async (shotId: string, liked: boolean) => {
  await likeOrUnlikeShot(shotId, liked)
}

const searchByTagFn = async (_q: string) => {
  q.value = _q
  condition.value = 'tag'
  resetPage.value = true
  await loadShotsOrMembers('shots', condition.value)
}
const searchByTag = useDebounceFn(searchByTagFn, 200)

const searchByTimeFn = async (timeStr: string) => {
  q.value = timeStr
  condition.value = 'time'
  resetPage.value = true
  await loadShotsOrMembers('shots', condition.value)
}
const searchByTime = useDebounceFn(searchByTimeFn, 200)

const searchSortBy = async (SortCondition: string) => {
  sort.value = SortCondition
  resetPage.value = true
  await loadShotsOrMembers('shots', condition.value)
}
</script>

<template>
  <Hero v-if="!isLogged" />
  <div>
    <FilterSubNav @search-by-tag="searchByTag" @search-by-time="searchByTime" @sort-by="searchSortBy" />
  </div>
  <main class="py-2 px-[3vw]">
    <div class="min-h-fit dark:border-gray-700">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
        <div v-for="s in shots" :key="s._id">
          <Shot :shot="s" @save="saveShot" @like="likeOrUnlikeShotFn" />
        </div>
      </div>
      <p v-if="!hasNext" class="text-center mt-4 text-sm">
        {{ $t('nav.reach_bottom') }}
      </p>
    </div>
    <SaveShotModal v-if="shotId" v-model:show="showCollectionModal" :shot-id="shotId" />
  </main>
</template>
