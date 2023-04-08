import type { ShotDto } from '@gp/types'
import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import type { UserInfo } from '@gp/types/user'
import { shotApi, userApi } from '@/api'

export const useShotStore = defineStore('collection', () => {
  const router = useRouter()
  const route = useRoute()

  const showCommentDrawer = ref(false)
  const shot = ref<ShotDto | null>(null)
  const shotId = ref(route.fullPath.split('/')[2])
  const shotAuthor = ref<UserInfo | null>(null)

  const toShotDetail = (s: ShotDto) => {
    if (s) {
      shot.value = s
      router.push(`/shots/${s._id}`)
    }
  }

  const setShotAuthor = async (author = 'rich4st') => {
    const { data } = await userApi.getUser(author)
    shotAuthor.value = data
  }

  const getShot = async () => {
    if (!shot.value) {
      const { data } = await shotApi.findShotById(shotId.value)
      shot.value = data
    }

    await setShotAuthor(shot.value.user)
    return shot.value
  }

  return {
    showCommentDrawer,
    shotAuthor,
    toShotDetail,
    getShot,
  }
})
