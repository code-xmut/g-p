import type { AxiosResponse } from 'axios'
import type { Comment } from '@gp/types'
import { useRequest } from '@/composables'

const { get, post, Delete, Put } = useRequest()

export const findCommentsByShotId = (shotId: string) => <Promise<AxiosResponse<Comment[]>>>get(`/comments/shot/${shotId}`)
