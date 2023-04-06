import type { Shot, ShotDraft, createShotDto } from '@gp/types'
import type { AxiosResponse } from 'axios'
import { useRequest } from '@/composables'

const { get, post } = useRequest()

export const findShots = () => get('/shots')

export const saveDraft = (shot: ShotDraft) => <Promise<AxiosResponse<Shot>>>post('/shots/draft', shot)

export const createShot = (shot: createShotDto) => <Promise<AxiosResponse<Shot>>>(post('/shots', shot))
