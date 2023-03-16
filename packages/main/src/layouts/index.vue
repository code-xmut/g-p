<script setup lang="ts">
import Navbar from './Navbar/index.vue'
</script>

<template>
  <div class="bg-white dark:bg-darkBg">
    <header>
      <Navbar />
    </header>
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>
