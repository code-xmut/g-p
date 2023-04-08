import type { AxiosResponse } from 'axios'
import type { Likes } from '@gp/types'
import { useRequest } from '@/composables'

const { get, post, Delete, Put } = useRequest()

export const findUserLikes = (userId: string) => <Promise<AxiosResponse<Likes>>>get(`/likes/${userId}`)
