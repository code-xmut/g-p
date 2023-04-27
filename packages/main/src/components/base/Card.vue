<script setup lang="ts">
</script>

<template>
  <div
    class="w-full relative  shadow-[0_2px_8px_2px_rgba(13,12,34,0.08)] border dark:border-gray-600 rounded-lg cursor-pointer px-5 py-6"
    v-bind="$attrs"
  >
    <slot />
    <!-- 让图片铺满div -->
    <div v-if="$slots.cover" class="w-full h-full absolute top-0 left-0">
      <slot name="cover" />
    </div>
  </div>
</template>
