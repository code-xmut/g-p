import type { ShotDto } from '@gp/types'
import { useDebounceFn } from '@vueuse/core'
import { likesApi, shotApi } from '@/api'
import { useUser } from '@/composables'

export const useShot = () => {
  const shots = ref<ShotDto[]>([])
  const shotId = ref()
  const showCollectionModal = ref(false)
  const { userId } = useUser()

  const likeShot = async (id: string) => {
    await likesApi.addShotToLikes(userId, id)
    await shotApi.likeShotById(id)
  }

  const unlikeShot = async (id: string) => {
    await likesApi.removeShotFormLikes(userId, id)
    await shotApi.unlikeShotById(id)
  }

  const updateShotsLikes = (id: string, like = 1) => {
    shots.value = shots.value?.map((s) => {
      if (s._id === id) {
        s.liked = true
        s.likes += like
      }
      return s
    })
  }

  const likeOrUnlikeShot = useDebounceFn(async (id: string, isLiked: boolean) => {
    if (isLiked) {
      await unlikeShot(id)
      shots.value = shots.value?.map((s) => {
        if (s._id === id) {
          s.liked = false
          s.likes += -1
        }
        return s
      })
    }
    else {
      await likeShot(id)
      shots.value = shots.value?.map((s) => {
        if (s._id === id) {
          s.liked = true
          s.likes += 1
        }
        return s
      })
    }
  }, 500)

  return {
    shots,
    shotId,
    showCollectionModal,
    likeShot,
    unlikeShot,
    likeOrUnlikeShot,
  }
}
