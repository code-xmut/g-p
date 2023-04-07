import type { AxiosResponse } from 'axios'
import type { Collection } from '@gp/types'
import { useRequest } from '@/composables'

const { get, post } = useRequest()

export const findUserCollections = (userId: string) => <Promise<AxiosResponse<Collection[]>>>get(`/collection/user/${userId}`)
