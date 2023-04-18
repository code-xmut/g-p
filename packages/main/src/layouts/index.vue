<script setup lang="ts">
import Navbar from './Navbar/index.vue'
import Footer from './Footer/index.vue'
</script>

<template>
  <div class="bg-white dark:bg-darkBg text-gray-900 dark:text-gray-400">
    <header>
      <Navbar />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
