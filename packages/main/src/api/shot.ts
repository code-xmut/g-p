import { useRequest } from '@/composables'

const { get } = useRequest()

export const findShots = () => get('/shots')
