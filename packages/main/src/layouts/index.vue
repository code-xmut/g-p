<script setup lang="ts">
import Navbar from './Navbar/index.vue'
import Sidebar from './SideBar/index.vue'
</script>

<template>
  <div class="bg-white dark:bg-darkBg">
    <header>
      <Navbar />
    </header>
    <main>
      <Sidebar />
    </main>
  </div>
</template>
