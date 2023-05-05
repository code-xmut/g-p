<script setup lang="ts">
import type { Collection } from '@gp/types'
import { useCollections } from '@/composables';

const collection = ref<Collection>()
const showEditCollectionModal = ref(false)
const showDeleteCollectionModal = ref(false)

const {
  collectionId,
  findCollectionById,
  updateCollection,
  deleteCollectionById
} = useCollections();

onMounted(async () => {
  const { data } = await findCollectionById(collectionId.value)
  collection.value = data
})
</script>

<template>
  <div class="px-2.5 lg:px-10 py-12 text-gray-900 dark:text-gray-500">
    <h1
      class="text-2xl lg:text-6xl font-bold"
    >
      {{ collection?.title }}
    </h1>
    <p class="text-gray-500 py-2 lg:py-6">
      {{ collection?.shots?.length }} Shots · 3 Designer
    </p>
    <p class="text-gray-500">
      {{ collection?.description }}
    </p>
    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center">
      <Avatar class="my-4" />
      <div>
        <Button class="btn-outline btn-secondary" text="编辑收藏夹" @click="showEditCollectionModal = true" />
        <Button class="ml-6 btn-outline btn-secondary" text="删除收藏夹" @click="showDeleteCollectionModal = true" />
      </div>
    </div>
  </div>
  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-9 px-2.5 lg:px-10">
    <li v-for="s in collection?.shots" :key="s._id">
      <Shot :shot="s" />
    </li>
  </ul>
  <CollectionModal v-if="collection" v-model:show="showEditCollectionModal" :collection="collection" @submit="updateCollection" />
  <Modal
    v-model:show="showDeleteCollectionModal"
    title="确认删除该收藏夹及所有组件?"
    content="该操作不可撤销"
    class="w-[30%]"
    @close="showDeleteCollectionModal = false"
    @confirm="deleteCollectionById()"
  />
</template>
