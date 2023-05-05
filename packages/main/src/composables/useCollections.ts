import type { Collection, createCollectionDto } from '@gp/types'
import { useRoute, useRouter } from 'vue-router'
import { useUser } from './useUser'
import { collectionsApi, shotApi } from '@/api'

export const useCollections = () => {
  const isCollectionEmpty = ref(false)
  const router = useRouter()
  const route = useRoute()
  const collectionId = ref(route.query.id as string)
  const { userId } = useUser()

  const getCollections = async () => {
    const { data } = await collectionsApi.findUserCollections(userId)
    if (data.length === 0)
      isCollectionEmpty.value = true

    return data
  }

  const findUserCollections = async () => {
    return await collectionsApi.findUserCollections(userId)
  }

  const toCollectionPage = (c: Collection) => {
    router.push({
      path: '/collection',
      query: {
        id: c._id,
      },
    })
  }

  const findCollectionById = async (CollectionId: string) => {
    return await collectionsApi.findCollectionById(CollectionId)
  }

  const updateCollection = async (Collection: Pick<Collection, 'title' | 'description'>) => {
    const { data } = await collectionsApi.updateCollectionById(collectionId.value, Collection)
    if (data)
      router.go(0)
  }

  const setEmptyCollection = (value: boolean) => {
    isCollectionEmpty.value = value
  }

  const deleteCollectionById = async () => {
    const { data } = await collectionsApi.deleteCollectionById(collectionId.value)
    if (data)
      router.back()
  }

  const saveShotToCollection = async (collectionId: string, shotId: string) => {
    const { data } = await collectionsApi.saveShotToCollection(collectionId, shotId)
    if (data) {
      await shotApi.collectShotById(shotId)
      return data
    }
    return false
  }

  const removeShotFromCollection = async (collectionId: string, shotId: string) => {
    const { data } = await collectionsApi.removeShotFromCollection(collectionId, shotId)
    if (data) {
      await shotApi.unCollectShotById(shotId)
      return data
    }
    return false
  }

  const createCollection = async (collection: createCollectionDto) => {
    const { data } = await collectionsApi.createCollection(collection)
    if (data)
      return data
    return false
  }

  const shotExistCollections = async (shotId?: string) => {
    const { data } = await collectionsApi.findShotExistCollections(shotId)
    if (data)
      return data
    return false
  }

  return {
    isCollectionEmpty,
    collectionId,
    getCollections,
    saveShotToCollection,
    removeShotFromCollection,
    createCollection,
    setEmptyCollection,
    shotExistCollections,
    findUserCollections,
    toCollectionPage,
    findCollectionById,
    updateCollection,
    deleteCollectionById,
  }
}
