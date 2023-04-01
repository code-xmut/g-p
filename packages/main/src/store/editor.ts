import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
// import { useMarkDown } from '@/composables'
import type { Block } from '@/types/editor'

export const useEditorStore = defineStore('editor', () => {
  const initialValue: Block[] = []
  const draft = useStorage('upload', initialValue)
  const showDrawer = ref(false)

  const toggleDrawer = () => {
    showDrawer.value = !showDrawer.value
  }

  const closeDrawer = () => {
    showDrawer.value = false
  }

  const insertBlock = (block: Block) => {
    draft.value.push(block)
  }

  return {
    draft,
    showDrawer,
    toggleDrawer,
    closeDrawer,
    insertBlock,
  }
})
