import type { AxiosResponse } from 'axios'
import { useRequest } from '@/composables'

export interface VerifyCodeData {
  email: string
  code: string
}

const { get, post } = useRequest()

export const sendEmail = (email: string) => <Promise<AxiosResponse<boolean>>>get(`/mail?email=${email}`)

export const verifyCode = (data: VerifyCodeData) => <Promise<AxiosResponse<boolean>>>post('/mail/verify', data)
