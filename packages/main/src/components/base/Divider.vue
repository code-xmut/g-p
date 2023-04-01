<script setup lang="ts">
interface Props {
  lineHeight?: string
  lineColor?: string
}

withDefaults(defineProps<Props>(), {
  lineHeight: '1px',
  lineColor: 'bg-pink-500',
})
</script>

<template>
  <div class="flex items-center">
    <div
      :class="[`h-[${lineHeight}]`, `${lineColor}`]"
      class="w-1/2"
    />
    <slot />
    <div
      :class="[`h-[${lineHeight}]`, `${lineColor}`]"
      class="w-1/2"
    />
  </div>
</template>
