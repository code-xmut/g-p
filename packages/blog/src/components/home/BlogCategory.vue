<script setup lang="ts">
import { computed } from 'vue'

const categories = computed(() => {
  return [
    {
      id: 1,
      name: 'Category 1',
    },
    {
      id: 2,
      name: 'Category 2',
    },
    {
      id: 3,
      name: 'Category 3',
    },
  ]
})
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold pb-2 md:pb-4">
      All Category
    </h1>
    <div class="space-y-1">
      <div
        v-for="category in categories" :key="category.id"
        class="text-pink-500 cursor-pointer hover:text-pink-400"
      >
        {{ category.name }}
      </div>
    </div>
  </div>
</template>
