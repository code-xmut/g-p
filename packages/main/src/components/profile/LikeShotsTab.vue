<script setup lang="ts">
import { likesApi } from '@/api'
import { useShot, useUser } from '@/composables'

const {
  shots,
  shotId,
  showCollectionModal,
  likeOrUnlikeShot,
} = useShot()

onMounted(async () => {
  const { userId } = useUser()

  const { data } = await likesApi.findUserLikes(userId)
  shots.value = data.shots
})

const saveShot = async (id: string) => {
  shotId.value = id
  showCollectionModal.value = true
}
</script>

<template>
  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-9">
    <li v-for="shot in shots" :key="shot._id">
      <Shot :shot="shot" @save="saveShot" @like="likeOrUnlikeShot" />
    </li>
  </ul>
  <SaveShotModal v-if="shotId" v-model:show="showCollectionModal" :shot-id="shotId" />
</template>
