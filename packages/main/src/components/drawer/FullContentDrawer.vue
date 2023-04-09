<script setup lang="ts">
withDefaults(defineProps<{
  show: boolean
  showBack?: boolean
}>(), {
  show: false,
  showBack: false,
})
defineEmits(['update:show'])
</script>

<template>
  <div
    v-if="show"
    class="w-[30vw] lg:w-1/3 max-h-screen relative overflow-y-scroll bottom-0 bg-white dark:bg-darkBg -right-10 p-4 z-50"
  >
    <div v-if="showBack" class="flex justify-end">
      <Icon icon="ic:twotone-keyboard-arrow-right" class="w-6 h-6 cursor-pointer" @click="$emit('update:show', false)" />
    </div>
    <slot />
  </div>
</template>
