<script setup lang="ts">
import { nanoid } from 'nanoid'
import { useI18n } from 'vue-i18n';
import { useEditorStore } from '@/store'
import { BlockEnum } from '@/types'

interface HeadingType {
  name: string
  type: BlockEnum
  icon: string
}

const store = useEditorStore()
const { t } = useI18n();

const headingList = reactive<HeadingType[]>([
  {
    name: t('editor.h1'),
    type: BlockEnum.H1,
    icon: 'mdi:format-header-1',
  },
  {
    name: t('editor.h2'),
    type: BlockEnum.H2,
    icon: 'mdi:format-header-2',
  },
  {
    name:t('editor.h3'),
    type: BlockEnum.H3,
    icon: 'mdi:format-header-3',
  },
  {
    name: t('editor.h4'),
    type: BlockEnum.H4,
    icon: 'mdi:format-header-4',
  },
  {
    name: t('editor.h5'),
    type: BlockEnum.H5,
    icon: 'mdi:format-header-5',
  },
  {
    name: t('editor.text'),
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
      <span class="ml-1">{{ $t('editor.img') }}</span>
    </div>
  </div>
</template>
