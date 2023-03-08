<script setup lang="ts">

</script>

<template>
  <Hero />
  <main class="py-2 px-4">
    <div class="min-h-screen dark:border-gray-700">
      <!-- grid layout display Shot -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="i in 10" :key="i">
          <Shot />
        </div>
      </div>
    </div>
  </main>
</template>
