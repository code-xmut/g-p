<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface SwapProps {
  fIcon: string
  sIcon: string
}

withDefaults(defineProps<SwapProps>(), {
  fIcon: 'mdi:chevron-up',
  sIcon: 'mdi:chevron-down',
})
</script>

<template>
  <label class="swap">
    <input type="checkbox">
    <Icon class="swap-on ml-2 w-6 h-6" :icon="fIcon" />
    <Icon class="swap-off ml-2 w-6 h-6" :icon="sIcon" />
  </label>
</template>
