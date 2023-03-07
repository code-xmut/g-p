<script setup lang="ts">
import SiteNav from './SiteNav.vue'
import SiteActions from './SiteActions.vue'
</script>

<template>
  <nav
    class="bg-white dark:bg-darkBg px-4 py-2.5 flex justify-between items-center"
  >
    <SiteNav />
    <SiteActions />
  </nav>
</template>
