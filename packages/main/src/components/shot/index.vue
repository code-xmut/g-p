<script setup lang="ts">
import type { ShotDto } from '@gp/types'
import { useRouter } from 'vue-router'
import { useShotStore } from '@/store'

interface ShotProps {
  shot: ShotDto
}

const props = defineProps<ShotProps>()
defineEmits(['save', 'like'])

const router = useRouter()
const store = useShotStore()
const { toShotDetail } = store

const toDetailPage = () => {
  store.toShotDetail(props.shot)
}

onMounted(() => {
  if (!toShotDetail)
    router.go(0)
})
</script>

<template>
  <div @click="toDetailPage">
    <div class="card md:h-48 lg:h-72 xl:h-[320px]  w-full cursor-pointer relative group">
      <img class="rounded-lg h-full object-cover" :src="shot?.cover" alt="Shoes">
      <ShotMask
        :collected="shot?.collected"
        :liked="shot?.liked"
        :title="shot?.title" @save="$emit('save', shot._id)" @like="$emit('like', shot._id, shot.liked)"
      />
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
