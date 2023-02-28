<script setup lang="ts">
import Navbar from './Navbar/index.vue'
import Sidebar from './SideBar/index.vue'
</script>

<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main class="dark:bg-[#131219]">
      <Sidebar />
    </main>
  </div>
</template>
