<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface ActionProps {
  icon?: string
  text?: string
}

withDefaults(defineProps<ActionProps>(), {
  icon: 'mdi:heart',
})
</script>

<template>
  <div class="flex items-center">
    <Icon
      :icon="icon"
      class="w-4 h-4 cursor-pointer hover:text-red-500"
      v-bind="$attrs"
    />
    <span v-if="text && text.length > 0" class="ml-1">
      {{ text }}
    </span>
  </div>
</template>
