<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  icon?: string
}

withDefaults(defineProps<Props>(), {
  icon: 'mdi:plus',
})
</script>

<template>
  <!-- plus icon -->
  <Icon class="w-6 h-6" :icon="icon" />
</template>
