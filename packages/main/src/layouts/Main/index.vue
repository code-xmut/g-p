<script setup lang="ts">

</script>

<template>
  <Hero />
  <div>
    <FilterSubNav />
  </div>
  <main class="py-2 px-[3vw]">
    <div class="min-h-screen dark:border-gray-700">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
        <div v-for="i in 10" :key="i">
          <Shot />
        </div>
      </div>
    </div>
    <Footer />
  </main>
</template>
