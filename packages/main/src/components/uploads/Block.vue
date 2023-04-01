<script setup lang="ts">
import type { Block } from '@/types/editor'
import { BlockEnum } from '@/types/editor'

interface Props {
  block: Block
}

withDefaults(defineProps<Props>(), {
})
</script>

<template>
  <img v-if="block.type === BlockEnum.IMG" class="py-4" :src="block.value" alt="">
  <textarea
    v-else
    :class="{ 'text-5xl': block.type === BlockEnum.H1, 'text-4xl': block.type === BlockEnum.H2 }"
    class="w-full outline-none resize-none bg-transparent font-bold py-2" placeholder="Give me a name"
  />
</template>
