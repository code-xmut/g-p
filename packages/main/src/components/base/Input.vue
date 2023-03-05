<script setup lang="ts">
export interface Props {
  label?: string
  placeholder?: string
  value?: string
}

withDefaults(
  defineProps<Props>(),
  {
    placeholder: 'Search...',
  },
)

const emit = defineEmits(['update:value'])

const emitValue = (e: Event) => {
  emit('update:value', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <input
    v-bind="$attrs"
    class="bg-transparent"
    type="text"
    data-test-id="input"
    :value="value"
    :placeholder="placeholder"
    @input="emitValue"
  >
</template>
