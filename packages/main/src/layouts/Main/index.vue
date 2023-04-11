<script setup lang="ts">
import { shotApi } from '@/api'
import { useShot } from '@/composables'

const {
  shots,
  shotId,
  showCollectionModal,
  likeOrUnlikeShot,
} = useShot()

onMounted(async () => {
  const { data } = await shotApi.findShotsWithStatusByPage()
  shots.value = data as any
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
</script>

<template>
  <Hero v-if="!isLogged" />
  <div>
    <FilterSubNav />
  </div>
  <main class="py-2 px-[3vw]">
    <div class="min-h-screen dark:border-gray-700">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
        <div v-for="s in shots" :key="s._id">
          <Shot :shot="s" @save="saveShot" @like="likeOrUnlikeShotFn" />
        </div>
      </div>
    </div>
    <SaveShotModal v-if="shotId" v-model:show="showCollectionModal" :shot-id="shotId" />
  </main>
</template>
