<script setup lang="ts">
const trending = computed(() => [
  {
    name: 'nature',
    url: '#',
  },
  {
    name: 'water',
    url: '#',
  },
  {
    name: 'mountain',
    url: '#',
  },
  {
    name: 'sky',
    url: '#',
  },
])
</script>

<template>
  <div class="flex mt-4">
    <span>
      Trending:
    </span>
    <ul class="flex space-x-2 ml-2 md:space-x-4 md:ml-4">
      <li v-for="t in trending" :key="t.name">
        <Link :text="`#${t.name}`" class="no-underline text-pink-500" />
      </li>
    </ul>
  </div>
</template>
