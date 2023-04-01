<script setup lang="ts">
import { useEditorStore } from '@/store'
import type { Block } from '@/types/editor'

interface Props {
  block: Block
}
defineProps<Props>()

const store = useEditorStore()
</script>

<template>
  <Divider
    line-height="1"
    :left-line-width="store.showDrawer ? '2/5' : '1/2'"
    :right-line-width="store.showDrawer ? '3/5' : '1/2'"
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
</template>
