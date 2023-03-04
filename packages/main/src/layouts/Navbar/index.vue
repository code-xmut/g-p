<script setup lang="ts">
import Search from './search.vue'
import GetStarted from './get-started.vue'
</script>

<template>
  <nav class="bg-white border-gray-200 px-2 pt-5 sm:px-4 dark:bg-[#131219] sm:pl-64">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <GetStarted />
      <Search />
    </div>
  </nav>
</template>
