import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import type { Collection } from '@gp/types'
import { collectionsApi } from '@/api'

export const useCollectionStore = defineStore('collection', () => {
  const router = useRouter()
  const route = useRoute()

  const collectionId = ref(route.query.id?.toString() || '')
  const collection = ref<Collection | null>(null)
  const showEditCollectionModal = ref(false)
  const showDeleteCollectionModal = ref(false)

  const getCollection = async () => {
    if (collection.value)
      return collection.value

    const { data } = await collectionsApi.findCollectionById(collectionId.value)
    if (data) {
      collection.value = data
      return data
    }
  }

  const toCollectionPage = (c: Collection) => {
    collection.value = c
    router.push({
      path: '/collection',
      query: {
        id: c._id,
      },
    })
  }

  const deleteCollection = async () => {
    const { data } = await collectionsApi.deleteCollectionById(collectionId.value)
    if (data) {
      router.back()
      showDeleteCollectionModal.value = false
    }
  }

  const updateCollectionById = async (d: Partial<Collection>) => {
    const { data } = await collectionsApi.updateCollectionById(collectionId.value, d)
  }

  return {
    collection,
    getCollection,
    showEditCollectionModal,
    showDeleteCollectionModal,
    deleteCollection,
    updateCollectionById,
    toCollectionPage,
  }
})
