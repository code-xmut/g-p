<script setup lang="ts">
interface DropDownProps {
  trigger?: 'click' | 'hover'
}

withDefaults(defineProps<DropDownProps>(), {
  trigger: 'hover',
})
</script>

<template>
  <div
    class="dropdown"
    :class="{
      'dropdown-hover': trigger === 'hover',
    }"
    v-bind="$attrs"
  >
    <slot />
    <template
      class="dropdown-content menu p-2 bg-white shadow text-gray-700 dark:bg-base-100 dark:text-gray-400 rounded-lg w-52"
    >
      <slot name="content" />
    </template>
  </div>
</template>
