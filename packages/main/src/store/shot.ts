import type { CommentDto, ShotDto, createCommentDto } from '@gp/types'
import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import type { UserInfo } from '@gp/types/user'
import { commentApi, likesApi, shotApi, userApi } from '@/api'
import { useUser } from '@/composables'

export const useShotStore = defineStore('collection', () => {
  const router = useRouter()
  const route = useRoute()
  const showCommentDrawer = ref(false)
  const showShotDetail = ref(false)
  const showCollectionModal = ref(false)
  const comments = ref<CommentDto[]>([])
  const shot = ref<ShotDto | null>(null)
  const shotId = ref(route.fullPath.split('/')[2])
  const shotAuthor = ref<UserInfo | null>(null)
  const { userId } = useUser()
  const comment = ref<createCommentDto>({
    content: '',
    user: userId,
    shotId: shotId.value,
  })

  const toShotDetail = (s: ShotDto) => {
    if (s) {
      shot.value = s
      const sId = s._id
      window.open(`/shots/${sId}`, '_blank')
    }
  }

  const setShotId = (id: string) => {
    shotId.value = id
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

  const getComments = async () => {
    const { data } = await commentApi.findCommentsByShotId(shotId.value)
    comments.value = data
  }

  const createComment = async () => {
    const { data } = await commentApi.createComment(comment.value)
    if (data) {
      comment.value.content = ''
      await getComments()
    }
  }

  const likeShot = async () => {
    const { data } = await likesApi.addShotToLikes(userId, shotId.value)
    if (data)
      return data
  }

  return {
    showCommentDrawer,
    showShotDetail,
    showCollectionModal,
    shotId,
    setShotId,
    comments,
    comment,
    shotAuthor,
    toShotDetail,
    getShot,
    getComments,
    createComment,
    likeShot,
  }
})
