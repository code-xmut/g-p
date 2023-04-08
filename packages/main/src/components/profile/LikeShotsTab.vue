<script setup lang="ts">
import type { ShotDto } from '@gp/types'
import { likesApi } from '@/api'
import { useUser } from '@/composables'

const likedShots = ref<ShotDto[]>([])

onMounted(async () => {
  const { userId } = useUser()

  const { data } = await likesApi.findUserLikes(userId)
  likedShots.value = data.shots
})
</script>

<template>
  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-9">
    <li v-for="shot in likedShots" :key="shot._id">
      <Shot :shot="shot" />
    </li>
  </ul>
</template>
