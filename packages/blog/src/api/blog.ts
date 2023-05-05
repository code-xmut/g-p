import type { AxiosResponse } from 'axios'
import { useRequest } from '@/composables'

const { get } = useRequest()

export const findBlogs = async () => <Promise<AxiosResponse<any>>>get('/blog')
