<script setup lang="ts">
import { useEditorStore } from '@/store'

const draft = localStorage.getItem('upload')
const store = useEditorStore()

store.draft = draft ? JSON.parse(draft) : []
</script>

<template>
  <div>
    <div v-for="b in store.draft" :key="b.id">
      <Block :block="b" />
    </div>
  </div>
</template>
