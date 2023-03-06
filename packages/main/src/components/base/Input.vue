<script setup lang="ts">
export interface Props {
  label?: string
  value?: string
}

withDefaults(
  defineProps<Props>(),
  {},
)

const emit = defineEmits(['update:value'])

const emitValue = (e: Event) => {
  emit('update:value', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <label v-if="label" class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">{{ label }}</label>
  <input
    v-bind="$attrs"
    class="input input-bordered"
    type="text"
    data-test-id="input"
    :value="value"
    @input="emitValue"
  >
</template>
