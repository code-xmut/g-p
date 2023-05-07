import type { AxiosResponse } from 'axios'
import type { Blog, createBlogDto } from '@gp/types'
import { useRequest } from '@/composables'

const { get, post, Delete, Put } = useRequest()

export const findBlogById = (id: string) => <Promise<AxiosResponse<Blog>>>get(`/blog/${id}`)

export const createBlog = (blog: createBlogDto) => <Promise<AxiosResponse<Blog>>>post('/blog', blog)
