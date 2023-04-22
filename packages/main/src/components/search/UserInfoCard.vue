<script setup lang="ts">
import type { UserInfo } from '@gp/types/user'
import type { ShotDto } from '@gp/types'
import { nextTick } from 'vue'
import { shotApi } from '@/api'

interface Props {
  user: UserInfo
}

const props = defineProps<Props>()
const userThreeComponents = ref<ShotDto[]>([])
const coverHeight = ref(0)

const getCoverHeightHandler = () => {
  coverHeight.value = document.querySelector('#cover-container')?.clientHeight as number
}

onMounted(async () => {
  const { data } = await shotApi.findUserShots(props.user.username)
  userThreeComponents.value = data.slice(0, 3)
  await nextTick(() => {
    getCoverHeightHandler()
  })
})

window.addEventListener('resize', getCoverHeightHandler)

onUnmounted(() => {
  window.removeEventListener('resize', getCoverHeightHandler)
})
</script>

<template>
  <Card>
    <Avatar :src="user.avatar" size-class="w-16 h-16" class="mb-4">
      <div class="ml-4">
        <p class="font-semibold text-xl">
          {{ user.name }}
        </p>
        <p>{{ user.location }}</p>
      </div>
    </Avatar>
    <div id="cover-container">
      <div v-for="c in userThreeComponents" ref="coverRef" :key="c._id" class="grid grid-cols-3 gap-1">
        <img :src="c.cover" alt="" class="rounded-lg" @click.prevent="$router.push(`/shots/${c._id}`)">
      </div>
    </div>
    <p
      v-if="userThreeComponents.length === 0 && coverHeight > 0" class="text-center text-gray-500 bg-gray-50 dark:bg-gray-600
      rounded-lg flex justify-center items-center"
      :style="{ height: `${coverHeight}px` }"
    >
      该用户暂时没有作品
    </p>
  </Card>
</template>
