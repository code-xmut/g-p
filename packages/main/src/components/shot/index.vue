<script setup lang="ts">
import type { ShotDto } from '@gp/types'
import { useRouter } from 'vue-router'
import { useShotStore } from '@/store'
import { userApi } from '@/api';

interface ShotProps {
  shot: ShotDto
  isDraft?: boolean
}

const props = defineProps<ShotProps>()
defineEmits(['save', 'like'])

const router = useRouter()
const store = useShotStore()
const { toShotDetail } = store
const userAvatar = ref('')

const toDetailPage = () => {
  store.toShotDetail(props.shot)
}

const continueDraft = () => {
  localStorage.setItem('upload', props.shot.content)
  router.push({ name: 'editor', query: { id: props.shot._id } })
}

const onShotClick = () => {
  if (props.isDraft)
    continueDraft()
  else
    toDetailPage()
}

onMounted(async () => {
  if (!toShotDetail)
    router.go(0)
  const { data } = await userApi.getUser(props.shot.user);
  userAvatar.value = data.avatar
})
</script>

<template>
  <div @click="onShotClick">
    <div class="card md:h-48 lg:h-72 xl:h-[320px]  w-full cursor-pointer relative group">
      <img class="rounded-lg h-full object-cover" :src="shot?.cover" alt="Shot">
      <ShotMask
        v-if="!isDraft"
        :collected="shot?.collected"
        :liked="shot?.liked"
        :title="shot?.title" @save="$emit('save', shot._id)" @like="$emit('like', shot._id, shot.liked)"
      />
    </div>
    <div v-if="!isDraft" class="mt-2 flex justify-between items-center">
      <Avatar :user-name="shot?.user" :src="userAvatar" />
      <div class="flex space-x-2">
        <Action :text="shot?.likes" />
        <Action icon="mdi:tag" :text="shot?.collections" />
      </div>
    </div>
  </div>
</template>
