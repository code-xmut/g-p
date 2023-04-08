<script setup lang="ts">
withDefaults(defineProps<{
  show: boolean
}>(), {
  show: false,
})
</script>

<template>
  <div
    v-if="show"
    style="height: calc(100vh - 68px);"
    class="w-full overflow-y-scroll absolute bottom-0 bg-white dark:bg-darkBg left-0 p-4 z-50"
  >
    <slot />
  </div>
</template>
