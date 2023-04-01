<script setup lang="ts">
import type { Block } from '@/types/editor'
import { BlockEnum } from '@/types/editor'
import { useEditorStore } from '@/store'

interface Props {
  block: Block
}

withDefaults(defineProps<Props>(), {
})

const store = useEditorStore()
</script>

<template>
  <div class="group">
    <div
      :class="{ 'lg:ml-[5vw]': store.showDrawer }"
      class="px-2 lg:ml-[15vw]"
    >
      <img v-if="block.type === BlockEnum.IMG" class="py-4" :src="block.value" alt="">
      <textarea
        v-else
        :class="{ 'text-5xl': block.type === BlockEnum.H1, 'text-4xl': block.type === BlockEnum.H2 }"
        class="w-full caret-pink-500 outline-none resize-none bg-transparent font-bold py-2 group" placeholder="Give me a name"
        :value="block.value"
      />
    </div>
    <Divider line-height="4px" class="hidden group-hover:flex">
      <Button
        v-tip="{ content: 'Add more details, images or text', placement: 'top' }"
        class="btn-secondary rounded-full font-normal"
        text="insert" @click="store.toggleDrawer"
      >
        <template #frontIcon>
          <Icon />
        </template>
      </Button>
    </Divider>
  </div>
</template>
