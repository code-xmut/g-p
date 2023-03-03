import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { ref } from 'vue'
import {
  requestErrorInterceptor,
  requestInterceptor,
  responseErrorInterceptor,
  responseInterceptor,
} from './interceptors'

const serve = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

serve.interceptors.request.use(requestInterceptor, requestErrorInterceptor)
serve.interceptors.response.use(responseInterceptor, responseErrorInterceptor)

export default function useRequest() {
  const loading = ref(false)

  async function get<T>(url: string, config?: AxiosRequestConfig) {
    try {
      loading.value = true
      const response = await serve.get<T>(url, config)

      return response
    }
    finally {
      loading.value = false
    }
  }

  async function post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    try {
      loading.value = true
      const response = await serve.post<T>(url, data, config)

      return response
    }
    finally {
      loading.value = false
    }
  }

  return {
    loading,
    get,
    post,
  }
}
