<script setup lang="ts">
import { nanoid } from 'nanoid'
import { useEditorStore } from '@/store'
import { BlockEnum } from '@/types'

interface HeadingType {
  name: string
  type: BlockEnum
  icon: string
}

const store = useEditorStore()

const headingList = reactive<HeadingType[]>([
  {
    name: 'Heading 1',
    type: BlockEnum.H1,
    icon: 'mdi:format-header-1',
  },
  {
    name: 'Heading 2',
    type: BlockEnum.H2,
    icon: 'mdi:format-header-2',
  },
  {
    name: 'Heading 3',
    type: BlockEnum.H3,
    icon: 'mdi:format-header-3',
  },
  {
    name: 'Heading 4',
    type: BlockEnum.H4,
    icon: 'mdi:format-header-4',
  },
  {
    name: 'Heading 5',
    type: BlockEnum.H5,
    icon: 'mdi:format-header-5',
  },
  {
    name: 'text',
    type: BlockEnum.TEXT,
    icon: 'mdi:format-text',
  },
])
</script>

<template>
  <div class="space-y-4 mt-4">
    <div v-for="h in headingList" :key="h.name">
      <div
        class="flex items-center hover:text-pink-500 cursor-pointer"
        @click="store.insertBlock(store.currentBlock.id, { id: nanoid(), type: h.type, value: '' })"
      >
        <Icon
          :icon="h.icon"
          class="w-4 h-4"
        />
        <span class="ml-1">{{ h.name }}</span>
      </div>
    </div>

    <div class="flex items-center hover:text-pink-500 cursor-pointer" 
      @click="store.insertBlock(store.currentBlock.id, { id: nanoid(), type: BlockEnum.IMG, value: 'http://localhost:3000/uploads/pexels-photo-3703521-1683202677028.jpeg' })">
      <Icon
        icon="mdi:image"
        class="w-4 h-4"
      />
      <span class="ml-1">Image</span>
    </div>
  </div>
</template>
