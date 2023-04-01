<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

interface Props {
  show?: boolean
}

withDefaults(defineProps<Props>(), {
  show: false,
})

const emit = defineEmits(['close'])
const target = ref<HTMLElement>()

onClickOutside(target, () => {
  emit('close')
})
</script>

<template>
  <div
    v-if="show"
    ref="target"
    class="w-[30vw] shadow-2xl bg-[#2a303c] h-screen fixed right-0 z-10 px-4 py-8"
  >
    <Button class="btn-ghost mb-4 font-thin" text="close" @click="$emit('close')" />
    <div class="px-4">
      <h1 class="text-xl font-semibold">
        Insert Block
      </h1>
      <slot />
    </div>
  </div>
</template>
