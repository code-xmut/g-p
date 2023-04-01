import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { useMarkDown } from '@/composables'
import { MarkDownEnum } from '@/types'
import type { Block } from '@/types/editor'

export const useEditorStore = defineStore('editor', () => {
  const initialValue: string[] = []
  const draft = useStorage('upload', initialValue)
  const showDrawer = ref(false)
  const unSavedContent = ref<Block[]>([])

  const toggleDrawer = () => {
    showDrawer.value = !showDrawer.value
  }

  const closeDrawer = () => {
    showDrawer.value = false
  }

  const insertBlock = (block: string) => {
    const b = useMarkDown(MarkDownEnum.HONE, block)
    draft.value.push(b)
  }

  return {
    draft,
    showDrawer,
    toggleDrawer,
    closeDrawer,
    insertBlock,
  }
})
