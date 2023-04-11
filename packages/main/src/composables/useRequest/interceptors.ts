import type { InternalAxiosRequestConfig } from 'axios'
import { useUser } from '@/composables'

export function requestInterceptor(config: InternalAxiosRequestConfig) {
  // Do something before request is sent
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}` || ''
  const { userId } = useUser()
  config.headers!.id = userId || ''
  return config
}

export function requestErrorInterceptor(error: any) {
  // Do something with request error
  return Promise.reject(error)
}

export function responseInterceptor(response: any) {
  // Do something with response data
  return response
}

export function responseErrorInterceptor(error: any) {
  // Do something with response error
  return Promise.reject(error)
}
