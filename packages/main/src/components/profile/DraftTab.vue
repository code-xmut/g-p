<script setup lang="ts">
import { shotApi } from '@/api'
import { useShot, useUser } from '@/composables'

const {
  shots,
  shotId,
} = useShot()

onMounted(async () => {
  const { userUserName } = useUser()

  const { data } = await shotApi.findUserDraft(userUserName)
  shots.value = data
})
</script>

<template>
  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-9">
    <li v-for="shot in shots" :key="shot._id">
      <Shot is-draft :shot="shot" />
    </li>
  </ul>
</template>
