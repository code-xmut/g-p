import type { Tag } from '@gp/types'
import type { AxiosResponse } from 'axios'
import { useRequest } from '@/composables'

const { get } = useRequest()

export const findAllTags = () => <Promise<AxiosResponse<Tag[]>>>get('/tags')
