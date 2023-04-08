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
  <Icon :icon="icon" />
</template>
