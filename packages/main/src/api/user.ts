import type { User } from '@gp/types'
import type { AxiosResponse } from 'axios'
import { useRequest } from '@/composables'

const { get, post } = useRequest()

export const getUser = (userName?: string) => <Promise<AxiosResponse<User>>>get(`/users/${userName}`)

export const isUserNameValid = (userName: string) => <any>get(`/users/username/${userName}`)

export const uploadFile = (file: FormData) => <Promise<AxiosResponse<{ url: string }>>>post('/upload', file,
  { headers: { 'Content-Type': 'multipart/form-data' } })
