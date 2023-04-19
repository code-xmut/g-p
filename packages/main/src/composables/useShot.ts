import type { ShotDto } from '@gp/types'
import { useDebounceFn } from '@vueuse/core'
import { likesApi, shotApi } from '@/api'
import { useUser } from '@/composables'
import router from '@/router'

export const useShot = () => {
  const shots = ref<ShotDto[]>([])
  const shotId = ref()
  const page = ref(0)
  const size = ref(8)
  const q = ref('')
  const hasNext = ref(true)
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

  const loadShots = async () => {
    page.value += 1
    const { data } = await shotApi.findShotsWithStatusByPage(page.value, size.value, q.value)
    shots.value.push(...data.shots)
    hasNext.value = data.hasNext
  }

  const toSearchPage = () => {
    router.push(`/search/${q.value}`)
    setTimeout(() => {
      q.value = ''
    }, 0)
  }

  return {
    shots,
    shotId,
    page,
    size,
    q,
    hasNext,
    showCollectionModal,
    likeShot,
    unlikeShot,
    likeOrUnlikeShot,
    loadShots,
    toSearchPage,
  }
}
