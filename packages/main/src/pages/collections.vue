<script setup lang="ts">
import type { Collection } from '@gp/types'
import { useCollectionStore } from '@/store'

const store = useCollectionStore()
const collection = ref<Collection>()

onMounted(async () => {
  collection.value = await store.getCollection()
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
        <Button class="btn-outline btn-secondary" text="Edit Collection" @click="store.showEditCollectionModal = true" />
        <Button class="ml-6 btn-outline btn-secondary" text="Delete Collection" @click="store.showDeleteCollectionModal = true" />
      </div>
    </div>
  </div>
  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-9 px-2.5 lg:px-10">
    <li v-for="s in collection?.shots" :key="s._id">
      <Shot :shot="s" />
    </li>
  </ul>
  <CollectionModal />
  <Modal
    :show="store.showDeleteCollectionModal"
    title="are you sure you want to delete this collection?"
    content="this action cannot be undone"
    @close="store.showDeleteCollectionModal = false"
    @confirm="store.deleteCollection()"
  />
</template>
