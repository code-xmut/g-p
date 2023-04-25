<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'
import { useReachBottom, useShot } from '@/composables'

const {
  q,
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
  removeScrollListener,
  addScrollListener,
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
</script>

<template>
  <Hero v-if="!isLogged" />
  <div>
    <FilterSubNav @search-by-tag="searchByTag" />
  </div>
  <main class="py-2 px-[3vw]">
    <div class="min-h-fit dark:border-gray-700">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
        <div v-for="s in shots" :key="s._id">
          <Shot :shot="s" @save="saveShot" @like="likeOrUnlikeShotFn" />
        </div>
      </div>
      <p v-if="!hasNext" class="text-center mt-4 text-sm">
        您已到达列表末尾
      </p>
    </div>
    <SaveShotModal v-if="shotId" v-model:show="showCollectionModal" :shot-id="shotId" />
  </main>
</template>
