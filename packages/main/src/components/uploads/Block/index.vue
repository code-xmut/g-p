<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'
import type { Block } from '@/types/editor'
import { BlockEnum } from '@/types/editor'
import { useEditorStore } from '@/store'
import { unref } from 'vue'
import { userApi } from '@/api'

interface Props {
  block: Block
}

const props = withDefaults(defineProps<Props>(), {
})

const store = useEditorStore()
const uploadFileRef = ref<HTMLInputElement | null>(null)

const updateBlockValue = useDebounceFn((e: Event) => {
  const target = e.target as HTMLInputElement
  store.updateBlock(props.block.id, target.value)
}, 1000)

const onDraftImgClick = (block: Block) => {
  const uploadFile = unref(uploadFileRef)
  if (uploadFile) {
    uploadFile.click()
  }
  uploadFile?.addEventListener('change', (e) => {
    const target = e.target as HTMLInputElement
    const file = target.files?.[0]
    if (file) {
      const formData = new FormData()
      formData.append('file', file)
      userApi.uploadFile(formData).then(({ data }) => {
        store.updateBlock(block.id, data.url)
      })
    }
  })
}
</script>

<template>
  <div class="group">
    <div
      class="px-2 lg:mx-[25vw]"
      :class="{ 'lg:mx-0': store.showDrawer, 'lg:ml-[10vw]': store.showDrawer, 'lg:mr-[30vw]': store.showDrawer }"
    >
      <input ref="uploadFileRef" hidden type="file" />
      <img v-tip="{ content: '点击上传图片', placement: 'right'}" v-if="block.type === BlockEnum.IMG" class="py-4 cursor-pointer" :src="block.value" alt="" @click="onDraftImgClick(block)">
      <textarea
        v-else-if="block.type === BlockEnum.TEXT"
        :value="block.value" class="w-full caret-pink-500 rounded-sm outline-2 hover:outline focus:outline focus:outline-pink-500
        outline-offset-8 bg-transparent font-bold py-2 group"
        @input="updateBlockValue"
      />
      <HeadingBlock v-else :block="block" />
    </div>
    <BlockDivider :block="block" />
  </div>
</template>
