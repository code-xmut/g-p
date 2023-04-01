<script setup lang="ts">
import { useEditorStore } from '@/store'
import { BlockEnum } from '@/types'

const store = useEditorStore()
</script>

<template>
  <div class="space-y-4 mt-4">
    <div
      class="flex items-center hover:text-red-500 cursor-pointer"
      @click="store.insertBlock({ id: '3', type: BlockEnum.H1, value: '456' })"
    >
      <Icon
        icon="mdi:format-text"
        class="w-4 h-4"
      />
      <span class="ml-1">Text</span>
    </div>
    <div class="flex items-center hover:text-red-500 cursor-pointer">
      <Icon
        icon="mdi:image"
        class="w-4 h-4"
      />
      <span class="ml-1">Image</span>
    </div>
  </div>
</template>
