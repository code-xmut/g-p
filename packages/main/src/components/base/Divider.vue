<script setup lang="ts">
interface Props {
  lineHeight?: string
  lineColor?: string
}

withDefaults(defineProps<Props>(), {
  lineHeight: '1',
  lineColor: 'bg-pink-500',
})

</script>

<template>
  <div class="flex items-center">
    <div class="w-1/2 h-1 bg-pink-500" v-bind="$attrs" />
    <slot />
    <div class="w-1/2 h-1 bg-pink-500" />
  </div>
</template>
