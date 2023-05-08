<script setup lang="ts">
import { useEditorStore } from '@/store'

const store = useEditorStore()
</script>

<template>
  <Drawer :show="store.showDrawer" class="right-0 overflow-scroll bg-[#2a303c]" @close="store.closeDrawer()">
    <Button class="btn-ghost mb-4 font-thin" text="close" @click="store.toggleDrawer()" />
    <div class="px-4">
      <h1 class="text-xl font-semibold">
        {{ $t('editor.insert') }}
      </h1>
      <Blocks />
    </div>
  </Drawer>
</template>
