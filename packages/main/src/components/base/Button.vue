<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    text?: string
    disabled?: boolean
    type?: 'primary' | 'secondary' | 'danger' | 'success'
  }>(),
  {
    text: '',
    disabled: false,
    type: 'primary',
  },
)

const typeClass = computed(() => {
  const classes = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-700',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    success: 'bg-green-500 hover:bg-green-600 text-white',
  }

  return classes[props.type]
})
</script>

<template>
  <button
    class="px-5 py-2.5 flex justify-center items-center font-medium rounded-lg focus:ring-4
    focus:outline-none focus:ring-blue-300 dark:focus:ring-gray-800"
    :class="[
      typeClass,
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
  >
    <span v-if="text !== ''">
      {{ text }}
    </span>
    <slot v-if="$slots.icon" name="icon" />
  </button>
</template>
