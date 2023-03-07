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
    class="w-screen h-[92vh] overflow-y-scroll absolute bottom-0 left-0 p-4"
  >
    <Input class="w-full" show-icon />
  </div>
</template>
