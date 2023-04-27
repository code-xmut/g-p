<script setup lang="ts">
</script>

<template>
  <div class="flex justify-between bg-white dark:bg-darkBg">
    <div class="w-full">
      <Buttons />
      <RouterView />
    </div>
    <PcDrawer />
  </div>
</template>
