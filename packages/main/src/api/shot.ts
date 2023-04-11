import type { Shot, ShotDraft, ShotDto, createShotDto } from '@gp/types'
import type { AxiosResponse } from 'axios'
import { useRequest } from '@/composables'

const { get, post, Put, Delete } = useRequest()

export const findShots = () => get('/shots')

export const findShotById = (id: string) => <Promise<AxiosResponse<ShotDto>>>get(`/shots/${id}`)

export const saveDraft = (shot: ShotDraft) => <Promise<AxiosResponse<Shot>>>post('/shots/draft', shot)

export const createShot = (shot: createShotDto) => <Promise<AxiosResponse<Shot>>>(post('/shots', shot))

export const findShotsWithStatusByPage = (page = 1, size = 9) =>
  <Promise<AxiosResponse<ShotDto[]>>>(get(`likes/shots/page?page=${page}&size=${size}`))

export const likeShotById = (shotId: string) =>
  <Promise<AxiosResponse<ShotDto>>>(Put(`/shots/${shotId}/like`))

export const unlikeShotById = (shotId: string) =>
  <Promise<AxiosResponse<ShotDto>>>(Put(`/shots/${shotId}/unlike`))
