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
    v-bind="$attrs"
    class="link text-sky-600"
  >
    {{ text }}
  </a>
</template>
