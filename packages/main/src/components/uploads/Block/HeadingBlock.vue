<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'
import { BlockEnum } from '@/types'
import type { Block } from '@/types/editor'
import { useEditorStore } from '@/store'

interface Props {
  block: Block
}

const props = withDefaults(defineProps<Props>(), {
})

const store = useEditorStore()

const headingList = computed(() => {
  return {
    'text-5xl': props.block.type === BlockEnum.H1,
    'text-4xl': props.block.type === BlockEnum.H2,
    'text-3xl': props.block.type === BlockEnum.H3,
    'text-2xl': props.block.type === BlockEnum.H4,
    'text-xl': props.block.type === BlockEnum.H5,
  }
})

const updateBlockValue = useDebounceFn((e: Event) => {
  const target = e.target as HTMLInputElement
  store.updateBlock(props.block.id, target.value)
}, 1000)
</script>

<template>
  <input
    :class="headingList"
    class="w-full caret-pink-500 rounded-sm outline-2 hover:outline focus:outline focus:outline-pink-500
        outline-offset-4 bg-transparent my-2 font-semibold group"
    placeholder="Give me a name"
    :value="block.value" @input="updateBlockValue"
  >
</template>
