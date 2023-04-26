import type { ShotDto } from '@gp/types'
import { useDebounceFn } from '@vueuse/core'
import { useRouter } from 'vue-router'
import type { UserInfo } from '@gp/types/user'
import { likesApi, shotApi, userApi } from '@/api'
import { useUser } from '@/composables'

export const useShot = () => {
  const shots = ref<ShotDto[]>([])
  const users = ref<UserInfo[]>([])
  const shotId = ref()
  const page = ref(0)
  const size = ref(8)
  const q = ref('')
  const sort = ref('createdAt')
  const resetPage = ref(false)
  const hasNext = ref(true)
  const showCollectionModal = ref(false)
  const { userId } = useUser()
  const router = useRouter()

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

  const loadShotsFN = async (qType = 'shots', condition = '') => {
    if (resetPage.value === true) {
      page.value = 0
      shots.value = []
      users.value = []
      hasNext.value = true
    }
    page.value += 1
    if (qType === 'shots') {
      const { data } = await shotApi.findShotsWithStatusByPage(page.value, size.value, q.value, condition, sort.value)
      shots.value.push(...data.shots)

      hasNext.value = data.hasNext
    }
    else {
      const { data } = await userApi.searchUsers(q.value, page.value, size.value)
      users.value.push(...data.users)

      hasNext.value = data.hasNext
    }
  }
  const loadShotsOrMembers = useDebounceFn(loadShotsFN, 200)

  const searchByType = async (_q: string, _qType: 'members' | 'shots') => {
    if (_qType === 'shots')
      router.push(`/search/${_q}`)
    else
      router.push(`/members/search/${_q}`)
  }

  return {
    shots,
    users,
    shotId,
    page,
    size,
    q,
    sort,
    resetPage,
    hasNext,
    showCollectionModal,
    likeShot,
    unlikeShot,
    likeOrUnlikeShot,
    loadShotsOrMembers,
    searchByType,
  }
}
