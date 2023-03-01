@@ -1,24 +0,0 @@
<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string
    rounded: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
  }>(),
  {
    text: 'Get started',
    rounded: 'lg',
  },
)
</script>

<template>
  <button
    v-bind="$attrs"
    type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
    focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600
    dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    :class="[`rounded-${rounded}`]"
  >
    <slot v-if="$slots.icon" name="icon" />
    <span v-else>
      {{ text }}
    </span>
  </button>
</template>
