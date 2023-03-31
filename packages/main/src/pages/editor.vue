<script setup lang="ts">
const content = JSON.parse(localStorage.getItem('upload') || '')
</script>

<template>
  <div>
    <Markdown :content="content" />
  </div>
</template>
