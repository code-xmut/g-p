<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useReachBottom, useShot } from '@/composables'

const {
  shots,
  shotId,
  hasNext,
  q,
  showCollectionModal,
  likeOrUnlikeShot,
  loadShots,
} = useShot()
const {
  reachBottom,
  removeScrollListener,
} = useReachBottom()
const route = useRoute()

onMounted(async () => {
  await loadShots()
})

onUnmounted(() => {
  q.value = ''
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
</script>

<template>
  <div class="py-2 px-[3vw]">
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
  </div>
</template>
