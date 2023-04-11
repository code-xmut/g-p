import type { AxiosResponse } from 'axios'
import type { Collection, createCollectionDto } from '@gp/types'
import { useRequest } from '@/composables'

const { get, post, Delete, Put } = useRequest()

export const createCollection = (collection: createCollectionDto) =>
  <Promise<AxiosResponse<Collection>>>post('/collection', collection)

export const findUserCollections = (userId: string) =>
  <Promise<AxiosResponse<Collection[]>>>get(`/collection/user/${userId}`)

export const deleteCollectionById = (collectionId = '') =>
  <Promise<AxiosResponse<Collection>>>Delete(`/collection/${collectionId}`)

export const findCollectionById = (collectionId = '') =>
  <Promise<AxiosResponse<Collection>>>get(`/collection/${collectionId}`)

export const updateCollectionById = (collectionId = '', data: Partial<Collection>) =>
  <Promise<AxiosResponse<Collection>>>Put(`/collection/${collectionId}`, data)

export const saveShotToCollection = (collectionId = '', shotId = '') =>
  <Promise<AxiosResponse<Collection>>>Put(`/collection/${collectionId}/shot/${shotId}`)

export const removeShotFromCollection = (collectionId = '', shotId = '') =>
  <Promise<AxiosResponse<Collection>>>Delete(`/collection/${collectionId}/shot/${shotId}`)

export const findShotExistCollections = (shotId = '') =>
  <Promise<AxiosResponse<string[]>>>get(`/collection/exist/${shotId}`)
