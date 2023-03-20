import type { CreateUserDto, LoginUserDto } from '@gp/types'
import type { AxiosResponse } from 'axios'
import { useRequest } from '@/composables'

const { post } = useRequest()

interface LoginResponse {
  access_token: string
}

export const login = (data: LoginUserDto) => <Promise<AxiosResponse<LoginResponse>>>post('/login', data)

export const register = (data: CreateUserDto) => post('/users/register', data)
