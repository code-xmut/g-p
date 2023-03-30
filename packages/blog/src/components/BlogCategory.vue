<script setup lang="ts">
import { computed } from 'vue';

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
  ];
});
</script>

<template>
<div>
  <h1>All Category</h1>
  <div>
    <div v-for="category in categories" :key="category.id">
      <router-link :to="`/category/${category.id}`">
        {{ category.name }}
      </router-link>
    </div>
    </div>
</div>
</template>
