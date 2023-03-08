<script setup lang="ts">
interface FilterSetProps {
  title?: string
}

withDefaults(defineProps<FilterSetProps>(), {
  title: 'Tags',
})
</script>

<template>
  <div>
    <div>
      {{ title }}
    </div>
    <div class="mt-2">
      <slot v-if="$slots.default" />
      <Input v-else show-icon />
    </div>
  </div>
</template>
