import type { Shot, ShotDraft, ShotDto, ShotPageDocument, createShotDto } from '@gp/types'
import type { AxiosResponse } from 'axios'
import { useRequest } from '@/composables'

const { get, post, Put } = useRequest()

export const findShots = () => get('/shots')

export const findShotById = (id: string) => <Promise<AxiosResponse<ShotDto>>>get(`/shots/${id}`)

export const saveDraft = (shot: ShotDraft) => <Promise<AxiosResponse<Shot>>>post('/shots/draft', shot)

export const createShot = (shot: createShotDto) => <Promise<AxiosResponse<Shot>>>(post('/shots', shot))

export const findShotsWithStatusByPage = (page = 1, size = 9, q = '', condition = '', sort?: string) =>
  <Promise<AxiosResponse<ShotPageDocument>>>(
    get(`likes/shots/page?page=${page}&size=${size}&q=${q}&condition=${condition}&sort=${sort}`))

export const likeShotById = (shotId: string) =>
  <Promise<AxiosResponse<ShotDto>>>(Put(`/shots/${shotId}/like`))

export const unlikeShotById = (shotId: string) =>
  <Promise<AxiosResponse<ShotDto>>>(Put(`/shots/${shotId}/unlike`))

export const findUserShots = (UserName: string) =>
  <Promise<AxiosResponse<ShotDto[]>>>(get(`/shots/user/${UserName}`))

export const findShotsPageByTag = (tag: string, page = 1, size = 9) =>
  <Promise<AxiosResponse<ShotPageDocument>>>(get(`likes/shots/page/${tag}?page=${page}&size=${size}`))
