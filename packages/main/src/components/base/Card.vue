<script setup lang="ts">

</script>

<template>
  <div
    class="card w-full min-h-[200px] text-gray-900 dark:text-gray-500 cursor-pointer relative group"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>
