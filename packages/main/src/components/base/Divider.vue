<script setup lang="ts">
interface Props {
  lineHeight?: string
  leftLineWidth?: string
  rightLineWidth?: string
  lineColor?: string
}

withDefaults(defineProps<Props>(), {
  lineHeight: '1',
  lineWidth: 'w-[50%]',
  lineColor: 'bg-pink-500',
})
</script>

<template>
  <div class="flex items-center">
    <div
      :class="[`h-${lineHeight}`, `${lineColor}`, `w-${leftLineWidth}`]"
    />
    <slot />
    <div
      :class="[`h-${lineHeight}`, `${lineColor}`, `w-${rightLineWidth}`]"
    />
  </div>
</template>
