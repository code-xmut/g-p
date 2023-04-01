<script setup lang="ts">
import { useEditorStore } from '@/store'

const store = useEditorStore()
</script>

<template>
  <div class="flex justify-between">
    <div class="w-full">
      <Buttons />
      <RouterView />
    </div>
    <Drawer :show="store.showDrawer" @close="store.closeDrawer">
      <Blocks />
    </Drawer>
  </div>
</template>
