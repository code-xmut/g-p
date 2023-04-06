import type { AxiosResponse } from 'axios'
import type { UserInfo } from '@gp/types/user'
import { useRequest } from '@/composables'

const { get, post } = useRequest()

export const getUser = (userName?: string) => <Promise<AxiosResponse<UserInfo>>>get(`/users/profile/${userName}`)

export const isUserNameValid = (userName: string) => <any>get(`/users/username/${userName}`)

export const uploadFile = (file: FormData) => <Promise<AxiosResponse<{ url: string }>>>post('/upload', file,
  { headers: { 'Content-Type': 'multipart/form-data' } })
