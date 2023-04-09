<script setup lang="ts">
import type { ShotDto } from '@gp/types/shot'
import { shotApi } from '@/api'

const shots = ref<ShotDto[]>()
const showCollectionModal = ref(false)
const shotId = ref()

onMounted(async () => {
  const { data } = await shotApi.findShots()
  shots.value = data as any
})

const isLogged = computed(() => {
  return !!localStorage.getItem('token')
})

const saveShot = async (id: string) => {
  shotId.value = id
  showCollectionModal.value = true
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
          <Shot :shot="s" @save="saveShot" />
        </div>
      </div>
    </div>
    <SaveShotModal v-model:show="showCollectionModal" :shot-id="shotId" />
  </main>
</template>
