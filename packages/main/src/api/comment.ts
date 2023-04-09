import type { AxiosResponse } from 'axios'
import type { Comment, createCommentDto } from '@gp/types'
import { useRequest } from '@/composables'

const { get, post, Delete, Put } = useRequest()

export const findCommentsByShotId = (shotId: string) => <Promise<AxiosResponse<Comment[]>>>get(`/comments/shot/${shotId}`)

export const createComment = (comment: createCommentDto) => <Promise<AxiosResponse<Comment>>>post('/comments', comment)
