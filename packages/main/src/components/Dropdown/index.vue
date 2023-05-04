<script setup lang="ts">
interface DropDownProps {
  trigger?: 'click' | 'hover' | 'open'
  placement?: 'bottom' | 'left' | 'right'
}

const props = withDefaults(defineProps<DropDownProps>(), {
  trigger: 'hover',
  placement: 'bottom',
})

const placement = computed(() => {
  return `dropdown-${props.placement}`
})
</script>

<template>
  <div
    class="dropdown"
    :class="[placement, trigger === 'hover' ? 'dropdown-hover' : 'dropdown-click',]"
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
