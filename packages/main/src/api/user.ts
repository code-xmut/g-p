import type { User } from '@gp/types'
import type { AxiosResponse } from 'axios'
import { useRequest } from '@/composables'

const { get } = useRequest()

export const getUser = (userName?: string) => <Promise<AxiosResponse<User>>>get(`/users/${userName}`)
