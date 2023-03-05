<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  text?: string
  disabled?: boolean
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
}

const props = withDefaults(
  defineProps<Props>(),
  {
    disabled: false,
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
</script>

<template>
  <button
    v-bind="$attrs"
    :class="[
      roundedClass,
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
  >
    <slot v-if="$slots.frontIcon" name="frontIcon" />
    <span v-if="text !== ''">
      {{ text }}
    </span>
    <slot v-if="$slots.icon" name="icon" />
  </button>
</template>
