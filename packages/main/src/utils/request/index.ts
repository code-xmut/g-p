import axios from 'axios'
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

export default serve
