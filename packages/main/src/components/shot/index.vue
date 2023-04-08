<script setup lang="ts">
import type { ShotDto } from '@gp/types'
import { useShotStore } from '@/store'

interface ShotProps {
  shot: ShotDto
}

const props = defineProps<ShotProps>()
const store = useShotStore()

const toDetailPage = () => {
  store.toShotDetail(props.shot)
}
</script>

<template>
  <div @click="toDetailPage">
    <div class="card min-h-[10vw] w-full cursor-pointer relative group">
      <figure><img class="rounded-lg" :src="shot?.cover" alt="Shoes"></figure>
      <ShotMask :title="shot?.title" />
    </div>
    <div class="mt-2 flex justify-between items-center">
      <Avatar :user-name="shot?.user" />
      <div class="flex space-x-2">
        <Action :text="shot?.likes" />
        <Action icon="mdi:eye-outline" :text="shot?.collections" />
      </div>
    </div>
  </div>
</template>
