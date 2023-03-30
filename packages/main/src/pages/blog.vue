<script setup lang="ts">
import { start } from 'qiankun'
import { onMounted } from 'vue'

onMounted(() => {
  start({
    sandbox: true,
    prefetch: true,
    singular: true,
    fetch: window.fetch,
  })
})
</script>

<template>
  <div id="subapp-viewport" />
</template>
