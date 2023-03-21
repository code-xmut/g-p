<script setup lang="ts">
import type { ShotDto } from '@gp/types'

interface ShotProps {
  shot?: ShotDto
}

defineProps<ShotProps>()
</script>

<template>
  <div>
    <div class="card w-full cursor-pointer relative group">
      <figure><img class="rounded-lg" :src="shot?.cover" alt="Shoes"></figure>
      <ShotMask :title="shot?.title" />
    </div>
    <div class="mt-2 flex justify-between items-center">
      <Avatar :user-name="shot?.user" />
      <div class="flex space-x-2">
        <Action :text="shot?.likes" />
        <Action icon="mdi:eye-outline" text="351" />
      </div>
    </div>
  </div>
</template>
