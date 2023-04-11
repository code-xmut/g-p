import type { AxiosResponse } from 'axios'
import type { Likes } from '@gp/types'
import { useRequest } from '@/composables'

const { get, post, Delete, Put } = useRequest()

export const findUserLikes = (userId: string) =>
  <Promise<AxiosResponse<Likes>>>get(`/likes/${userId}`)

export const addShotToLikes = (userId: string, shotId: string) =>
  <Promise<AxiosResponse<Likes>>>post(`/likes/${userId}/shot/${shotId}`)

export const removeShotFormLikes = (userId: string, shotId: string) =>
  <Promise<AxiosResponse<Likes>>>Delete(`/likes/${userId}/shot/${shotId}`)
