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
      <input
        v-else
        :class="headingList"
        class="w-full caret-pink-500 rounded-sm outline-2 hover:outline focus:outline focus:outline-pink-500
        outline-offset-8 bg-transparent font-bold py-2 group"
        placeholder="Give me a name"
        :value="block.value" @input="updateBlockValue"
      >
    </div>
    <Divider
      line-height="4px"
      class="invisible group-hover:visible"
    >
      <Button
        v-tip="{ content: 'Add more details, images or text', placement: 'top' }"
        class="btn-secondary rounded-full font-normal"
        text="插入" @click="store.toggleDrawer(block)"
      >
        <template #frontIcon>
          <Icon />
        </template>
      </Button>
    </Divider>
  </div>
</template>
