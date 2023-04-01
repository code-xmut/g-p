<script setup lang="ts">
import { useDropzone } from 'vue3-dropzone'
import { useRouter } from 'vue-router'
import { useMarkDown } from '@/composables'
import { useEditorStore } from '@/store'
import { userApi } from '@/api'
import { MarkDownEnum } from '@/types'

const router = useRouter()
const store = useEditorStore()

const { getRootProps, getInputProps, ...rest } = useDropzone({
  onDrop: async (acceptedFiles) => {
    const formData = new FormData()
    formData.append('file', acceptedFiles[0])

    const { data } = await userApi.uploadFile(formData)

    store.insertBlock(useMarkDown(MarkDownEnum.IMG, data.url))
    router.push('/uploads/editor')
  },
})

const open = () => {
  const input = document.querySelector('input[type="file"]') as HTMLInputElement
  input.click()
}

const isDragActive = rest.isDragActive
</script>

<template>
  <div
    class="rounded-tl-lg rounded-tr-lg border-t-2 border-l-2 border-r-2 border-dashed border-gray-500 h-[60vh] flex flex-col
      justify-center items-center md:px-[10vw]"
  >
    <img class="w-48 h-48 mb-10" src="@/assets/images/image2.jpg" alt="">
    <div class="flex">
      <div v-bind="getRootProps()">
        <input v-bind="getInputProps()">
        <p v-if="isDragActive">
          Drop the files here ...
        </p>
        <p v-else>
          Drag files here, or
        </p>
      </div>
      <Link class="underline underline-offset-1 ml-2 text-pink-500" text="Browser" @click="open" />
    </div>
  </div>
</template>
