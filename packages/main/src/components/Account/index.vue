<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col md:flex-row space-y-4 text-gray-800 dark:text-gray-400">
    <div>
      <AccountMenu />
    </div>
    <div class="w-full">
      <RouterView />
    </div>
  </div>
</template>
