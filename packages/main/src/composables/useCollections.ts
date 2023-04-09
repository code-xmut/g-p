import type { createCollectionDto } from '@gp/types'
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

  const setEmptyCollection = (value: boolean) => {
    isCollectionEmpty.value = value
  }

  const saveShotToCollection = async (collectionId: string, shotId?: string) => {
    const { data } = await collectionsApi.saveShotToCollection(collectionId, shotId)
    if (data)
      return data
    return false
  }

  const removeShotFromCollection = async (collectionId: string, shotId?: string) => {
    const { data } = await collectionsApi.removeShotFromCollection(collectionId, shotId)
    if (data)
      return data
    return false
  }

  const createCollection = async (collection: createCollectionDto) => {
    const { data } = await collectionsApi.createCollection(collection)
    if (data)
      return data
    return false
  }

  return {
    isCollectionEmpty,
    getCollections,
    saveShotToCollection,
    removeShotFromCollection,
    createCollection,
    setEmptyCollection,
  }
}
