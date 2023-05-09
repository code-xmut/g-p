<script setup lang="ts">
interface Propps {
  label?: string
  value?: string
  placeholder?: string
}

defineProps<Propps>()
defineEmits(['update:value'])
</script>

<template>
  <div class="flex flex-col">
    <label for="description" class="block mb-2 text-md font-medium text-gray-600 dark:text-white">
      {{ label }}
    </label>
    <textarea
      :value="value"
      class="textarea textarea-bordered h-20 w-full bg-white dark:bg-cardBg text-gray-800 dark:text-gray-400"
      :placeholder="placeholder || '请输入'"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
