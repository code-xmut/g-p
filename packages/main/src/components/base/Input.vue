<script setup lang="ts">
withDefaults(
  defineProps<{
    placeholder?: string
  }>(),
  {
    placeholder: 'Search...',
  },
)
</script>

<template>
  <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  <input
    id="default-search" type="search"
    class="block w-full min-w-[300px] p-3 pr-12 text-sm text-gray-900 border dark:border-gray-500 rounded-full bg-gray-50 dark:bg-[#1d1c23]
    dark:placeholder-gray-400 dark:text-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
    :placeholder="placeholder" required
  >
</template>
