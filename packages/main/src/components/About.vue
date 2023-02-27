<script setup lang="ts">
withDefaults(defineProps<{
  msg: string
}>(), {
  msg: 'About',
})
</script>

<template>
  <h1>
    About
  </h1>
</template>
