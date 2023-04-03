import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { nanoid } from 'nanoid'
import { findIndex } from 'lodash-es'
import type { ShotDraft } from '@gp/types'
import type { Block } from '@/types/editor'
import { BlockEnum } from '@/types/editor'
import { shotApi } from '@/api'

export const useEditorStore = defineStore('editor', () => {
  const initialValue: Block[] = [
    {
      id: nanoid(),
      type: BlockEnum.H1,
      value: 'Hello World',
    },
  ]
  const draft = useStorage('upload', initialValue)
  const showDrawer = ref(false)
  const currentBlock = ref<Block>(initialValue[0])
  const showCancelModal = ref(false)

  const toggleDrawer = (block?: Block) => {
    showDrawer.value = !showDrawer.value
    if (block)
      currentBlock.value = block
  }

  const closeDrawer = () => {
    showDrawer.value = false
  }

  const pushBlock = (block: Block) => {
    draft.value.push(block)
  }

  const updateBlock = (id: string, v: string) => {
    const index = findIndex(draft.value, item => item.id === id)
    draft.value[index].value = v
  }

  const insertBlock = (id: string, block: Block) => {
    const index = findIndex(draft.value, item => item.id === id)
    draft.value.splice(index + 1, 0, block)
  }

  const resetDraft = () => {
    draft.value = initialValue
  }

  const saveDraft = async () => {
    const draftShot: ShotDraft = {
      title: draft.value[0].value,
      cover: draft.value[1].value,
      content: JSON.stringify(draft.value),
      state: 'draft',
    }
    const { data } = await shotApi.saveDraft(draftShot)
  }

  return {
    draft,
    currentBlock,
    showDrawer,
    showCancelModal,
    toggleDrawer,
    closeDrawer,
    pushBlock,
    updateBlock,
    insertBlock,
    saveDraft,
    resetDraft,
  }
})
