<script setup lang="ts">
import type { ShotDto } from '@gp/types/shot'
import { shotApi } from '@/api'

const shots = ref<ShotDto[]>()

onMounted(async () => {
  const { data } = await shotApi.findShots()
  shots.value = data as any
})
</script>

<template>
  <Hero />
  <div>
    <FilterSubNav />
  </div>
  <main class="py-2 px-[3vw]">
    <div class="min-h-screen dark:border-gray-700">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
        <div v-for="s in shots" :key="s._id">
          <Shot :shot="s" />
        </div>
      </div>
    </div>
  </main>
</template>
