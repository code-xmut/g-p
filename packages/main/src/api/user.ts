import type { AxiosResponse } from 'axios'
import type { UpdateUserProfileDto, UserInfo, UserPageDocument } from '@gp/types/user'
import { useRequest } from '@/composables'

const { get, post, Put, Delete } = useRequest()

export const getUser = (userName?: string) => <Promise<AxiosResponse<UserInfo>>>get(`/users/profile/${userName}`)

export const isUserNameValid = (userName: string) => <any>get(`/users/username/${userName}`)

export const uploadFile = (file: FormData) => <Promise<AxiosResponse<{ url: string }>>>post('/upload', file,
  { headers: { 'Content-Type': 'multipart/form-data' } })

export const updateUserAvatar = (avatar: string, userId: string) =>
  <Promise<AxiosResponse<UserInfo>>>Put(`/users/profile/${userId}`, { avatar })

export const updateUserInfo = (userInfo: UpdateUserProfileDto) =>
  <Promise<AxiosResponse<UserInfo>>>Put(`/users/profile/${userInfo._id}`, userInfo)

export const updateGeneralInfo = (generalInfo: { name: string; email: string }, userId: string) =>
  <Promise<AxiosResponse<UserInfo>>>Put(`/users/profile/${userId}`, generalInfo)

export const updatePassword = (passwordInfo: { oldPassword: string; newPassword: string }, userId: string) =>
  <Promise<AxiosResponse<UserInfo>>>Put(`/users/security/${userId}`, passwordInfo)

export const deleteUser = () => <Promise<AxiosResponse<UserInfo>>>Delete('/users/destory')

export const searchUsers = (q: string, page = 1, size = 6) =>
  <Promise<AxiosResponse<UserPageDocument>>>get(`/users/search/${q}?page=${page}&size=${size}`)

export const recoverPassword = (email: string, newPassword: string) =>
  <Promise<AxiosResponse<boolean>>>Put('/users/recover/security', { email, newPassword })
