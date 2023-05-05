<script setup lang="ts">
import type { Collection } from '@gp/types'
import { useCollections } from '@/composables';

const { 
  findUserCollections,
  toCollectionPage
} = useCollections();

const collections = ref<Collection[]>([])
onMounted(async () => {
  const { data } = await findUserCollections()
  collections.value = data
})
</script>

<template>
  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6">
    <li v-for="c in collections" :key="c._id">
      <Collections :collection="c" @click="toCollectionPage(c)" />
    </li>
  </ul>
</template>
