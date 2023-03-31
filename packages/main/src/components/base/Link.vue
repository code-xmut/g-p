<script setup lang="ts">
export interface LinkProps {
  text: string
}

withDefaults(defineProps<LinkProps>(), {
  text: '',
})
</script>

<template>
  <a
    class="link no-underline"
    v-bind="$attrs"
  >
    {{ text }}
  </a>
</template>
