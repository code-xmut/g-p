<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
    placeholder?: string
    value?: string
  }>(),
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
  <div>
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">{{ label }}</label>
    <input
      id="default-search"
      data-test-id="input"
      :value="value" class="block w-full min-w-[300px] p-3 pr-12 text-sm text-gray-900 border dark:border-gray-500 rounded-full
      bg-gray-50 dark:bg-[#1d1c23] dark:placeholder-gray-400 dark:text-white focus:outline-none focus:border-sky-500 focus:ring-sky-500
      focus:ring-1 transition duration-300 ease-in-out caret-pink-500"
      :placeholder="placeholder"
      @input="emitValue"
    >
  </div>
</template>
