import type { Shot, ShotDraft, ShotDto, createShotDto } from '@gp/types'
import type { AxiosResponse } from 'axios'
import { useRequest } from '@/composables'

const { get, post } = useRequest()

export const findShots = () => get('/shots')

export const findShotById = (id: string) => <Promise<AxiosResponse<ShotDto>>>get(`/shots/${id}`)

export const saveDraft = (shot: ShotDraft) => <Promise<AxiosResponse<Shot>>>post('/shots/draft', shot)

export const createShot = (shot: createShotDto) => <Promise<AxiosResponse<Shot>>>(post('/shots', shot))
