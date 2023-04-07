<script setup lang="ts">
import type { Collection } from '@gp/types'
import { collectionsApi } from '@/api'

const userId = JSON.parse(localStorage.getItem('user') || '{}')._id
const collections = ref<Collection[]>([])
onMounted(async () => {
  const { data } = await collectionsApi.findUserCollections(userId)
  collections.value = data
})
</script>

<template>
  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6">
    <li v-for="c in collections" :key="c._id">
      <Collections :collection="c" @click="$router.push('collections')" />
    </li>
  </ul>
</template>
