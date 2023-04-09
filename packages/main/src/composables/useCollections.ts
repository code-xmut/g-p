import { useUser } from './useUser'
import { collectionsApi } from '@/api'

export const useCollections = () => {
  const isCollectionEmpty = ref(false)
  const { userId } = useUser()

  const getCollections = async () => {
    const { data } = await collectionsApi.findUserCollections(userId)
    if (data.length === 0)
      isCollectionEmpty.value = true

    return data
  }

  return {
    isCollectionEmpty,
    getCollections,
  }
}
