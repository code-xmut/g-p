<script setup lang="ts">
interface Props {
  lineHeight?: string
  lineColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  lineHeight: '1px',
  lineColor: 'bg-pink-500',
})

const dividerLineHeight = computed(() => {
  return `h-[${props.lineHeight}]`
})

const dividerLineColor = computed(() => {
  return `${props.lineColor}`
})
</script>

<template>
  <div class="flex items-center">
    <div
      :class="[dividerLineHeight, dividerLineColor]"
      class="w-1/2"
    />
    <slot />
    <div
      :class="[dividerLineHeight, dividerLineColor]"
      class="w-1/2"
    />
  </div>
</template>
