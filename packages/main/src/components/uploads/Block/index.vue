<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'
import type { Block } from '@/types/editor'
import { BlockEnum } from '@/types/editor'
import { useEditorStore } from '@/store'

interface Props {
  block: Block
}

const props = withDefaults(defineProps<Props>(), {
})

const store = useEditorStore()

const updateBlockValue = useDebounceFn((e: Event) => {
  const target = e.target as HTMLInputElement
  store.updateBlock(props.block.id, target.value)
}, 1000)
</script>

<template>
  <div class="group">
    <div
      class="px-2 lg:mx-[25vw]"
      :class="{ 'lg:mx-0': store.showDrawer, 'lg:ml-[10vw]': store.showDrawer, 'lg:mr-[30vw]': store.showDrawer }"
    >
      <img v-if="block.type === BlockEnum.IMG" class="py-4" :src="block.value" alt="">
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
