import type { CreateUserDto, LoginUserDto } from '@gp/types'
import { useRequest } from '@/composables'

const { post } = useRequest()

export const login = (data: LoginUserDto) => post('/login', data)

export const register = (data: CreateUserDto) => post('/users/register', data)
