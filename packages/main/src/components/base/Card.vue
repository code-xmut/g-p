<script setup lang="ts">

</script>

<template>
  <div
    class="w-full shadow-[0_2px_8px_2px_rgba(13,12,34,0.08)] border dark:border-gray-600 rounded-lg cursor-pointer px-5 py-6"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>
