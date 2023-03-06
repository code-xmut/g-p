<script setup lang="ts">
import Search from './search.vue'
import GetStarted from './get-started.vue'
</script>

<template>
  <nav class="border-gray-200 px-2 pt-5 sm:px-4 sm:pl-64">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <GetStarted />
      <Search />
    </div>
  </nav>
</template>
