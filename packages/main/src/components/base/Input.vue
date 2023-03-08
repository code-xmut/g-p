<script setup lang="ts">
import { Icon } from '@iconify/vue'

export interface Props {
  showIcon?: boolean
  label?: string
  value?: string
}

defineProps<Props>()

const emit = defineEmits(['update:value'])

const emitValue = (e: Event) => {
  emit('update:value', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="relative">
    <div v-if="showIcon" class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <slot v-if="$slots.icon" name="icon" />
      <Icon v-else class="w-6 h-6" icon="mdi:magnify" />
    </div>
    <label v-if="label" class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">{{ label }}</label>
    <input
      v-bind="$attrs"
      class="input input-bordered bg-white text-gray-800 dark:bg-cardBg dark:text-gray-400"
      :class="[
        {
          'pl-10': showIcon,
        },
      ]"
      type="text"
      data-test-id="input"
      :value="value"
      @input="emitValue"
    >
  </div>
</template>
