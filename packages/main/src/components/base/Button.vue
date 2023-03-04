<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  text?: string
  disabled?: boolean
  type?: 'primary' | 'secondary' | 'danger' | 'success'
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
}

const props = withDefaults(
  defineProps<Props>(),
  {
    text: '',
    disabled: false,
    type: 'primary',
    rounded: 'lg',
  },
)

const roundedClass = computed(() => {
  const classes = {
    'sm': 'rounded-sm',
    'md': 'rounded-md',
    'lg': 'rounded-lg',
    'xl': 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    'full': 'rounded-full',
  }

  return classes[props.rounded]
})

const typeClass = computed(() => {
  const classes = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-gray-700',
    danger: 'bg-danger text-white',
    success: 'bg-success text-white',
  }

  return classes[props.type]
})
</script>

<template>
  <button
    class="px-5 py-2.5 flex justify-center items-center font-medium focus:ring-4
    focus:outline-none focus:ring-blue-300 dark:focus:ring-gray-800"
    :class="[
      roundedClass,
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
