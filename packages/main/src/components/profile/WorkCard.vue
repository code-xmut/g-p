<script setup lang="ts">
import type { ShotDto } from '@gp/types'
import { shotApi } from '@/api'
import { useUser } from '@/composables';

const { userUserName } = useUser();

const shots = ref<ShotDto[]>([])
onMounted(async () => {
  const { data } = await shotApi.findUserShots(userUserName)
  shots.value = data.filter(shot => shot.state === 'published')
})
</script>

<template>
  <ul class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    <li v-if="shots.length === 0">
      <Card class="min-h-[320px] lg:min-h-[360px] border-2 border-dashed flex flex-col justify-center items-center">
        <h1 class="text-3xl md:text-xl xl:text-3xl text-gray-900 dark:text-gray-500">
          Upload your first shot
        </h1>
        <p class="text-center px-10 my-4">
          Show off your best work. Get feedback, likes and be a part of a growing community.
        </p>
        <Button text="上传你的第一个组件" class="btn-secondary" @click="$router.push('/uploads')" />
      </Card>
    </li>
    <template v-if="shots.length === 0">
      <li v-for="i in 5" :key="i">
        <Card class="min-h-[320px] lg:min-h-[360px] empty-shot-item border-0" />
      </li>
    </template>
    <li v-for="shot in shots" :key="shot._id">
      <Shot is-draft :shot="shot" />
    </li>
  </ul>
</template>

<style scoped>
.empty-shot-item {
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.03)), to(transparent));
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.03) 0%, transparent 100%);
}
</style>
