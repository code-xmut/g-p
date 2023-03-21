import type { User } from '@gp/types'
import type { AxiosResponse } from 'axios'
import { useRequest } from '@/composables'

const { get, post } = useRequest()

export const getUser = (userName?: string) => <Promise<AxiosResponse<User>>>get(`/users/${userName}`)

export const isUserNameValid = (userName: string) => <any>get(`/users/username/${userName}`)
