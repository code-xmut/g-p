import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { nanoid } from 'nanoid'
import { findIndex } from 'lodash-es'
import type { ShotDraft, createBlogDto, createShotDto } from '@gp/types'
import { useRoute, useRouter } from 'vue-router'
import type { Block } from '@/types/editor'
import { BlockEnum } from '@/types/editor'
import { blogApi, shotApi } from '@/api'
import { useUser } from '@/composables'

const { userUserName } = useUser()

export const useEditorStore = defineStore('editor', () => {
  const initialValue: Block[] = [
    {
      id: nanoid(),
      type: BlockEnum.H1,
      value: 'Hello World',
    },
  ]
  const router = useRouter()
  const route = useRoute()
  const draft = useStorage('upload', initialValue)
  const draftType = useStorage('draftType', localStorage.getItem('draftType') || 'component')
  const showDrawer = ref(false)
  const currentBlock = ref<Block>(initialValue[0])
  const showCancelModal = ref(false)
  const showContinueModal = ref(false)

  const publishedMessage = computed(() => {
    if (draftType.value === '博客')
      return '博客'
    else
      return '组件'
  })

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

  const removeBlock = (id: string) => {
    const index = findIndex(draft.value, item => item.id === id)
    if (index === 0)
      return
    draft.value.splice(index, 1)
  }

  const moveBlockUp = (id: string) => {
    const index = findIndex(draft.value, item => item.id === id)
    const block = draft.value[index]
    draft.value.splice(index, 1)
    draft.value.splice(index - 1, 0, block)
  }

  const moveBlockDown = (id: string) => {
    const index = findIndex(draft.value, item => item.id === id)
    const block = draft.value[index]
    draft.value.splice(index, 1)
    draft.value.splice(index + 1, 0, block)
  }

  const resetDraft = () => {
    draft.value = initialValue
  }

  const saveDraft = async () => {
    const draftId = route.query.id as string
    let draftShot: ShotDraft | null = null
    if (!draftId) {
      draftShot = {
        title: draft.value[0].value,
        cover: draft.value[1].value,
        content: JSON.stringify(draft.value),
        user: userUserName,
        state: 'draft',
      }
    }
    else {
      draftShot = {
        _id: draftId,
        title: draft.value[0].value,
        cover: draft.value[1].value,
        content: JSON.stringify(draft.value),
        user: userUserName,
        state: 'draft',
      }
    }

    await shotApi.saveDraft(draftShot)
    router.push({ name: 'home' })
  }

  const leaveEditor = (save = true) => {
    if (save)
      saveDraft()

    resetDraft()
    showCancelModal.value = false
    router.go(-2)
  }

  const publishShot = async (tags: string[], description: string, serverUrl = '') => {
    if (draftType.value === '博客') {
      const blog: createBlogDto = {
        title: draft.value[0].value,
        cover: draft.value[1].value,
        content: JSON.stringify(draft.value),
        description,
        author: userUserName,
      }
      await blogApi.createBlog(blog)
    }
    else {
      const shot: createShotDto = {
        title: draft.value[0].value,
        cover: draft.value[1].value,
        description,
        tags,
        content: JSON.stringify(draft.value),
        user: userUserName,
        serverUrl,
        state: 'published',
      }
      await shotApi.createShot(shot)
    }
    showContinueModal.value = false
    router.push({ name: 'home' })
    alert(`成功发布${publishedMessage.value}`)
    resetDraft()
  }

  return {
    draft,
    draftType,
    currentBlock,
    showDrawer,
    showCancelModal,
    showContinueModal,
    toggleDrawer,
    closeDrawer,
    pushBlock,
    updateBlock,
    insertBlock,
    removeBlock,
    moveBlockUp,
    moveBlockDown,
    saveDraft,
    leaveEditor,
    resetDraft,
    publishShot,
  }
})
