<script setup lang="ts">
import { useEditorStore } from '@/store'

const store = useEditorStore()
</script>

<template>
  <div>
    <div v-for="b in store.draft" :key="b.id">
      <Block :block="b" />
    </div>
  </div>
</template>
