<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

interface Props {
  show?: boolean
}

withDefaults(defineProps<Props>(), {
  show: false,
  placement: 'right',
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
    v-bind="$attrs" ref="target"
    class="bottom-0 w-full md:w-[20vw] rounded-tl-md rounded-tr-md shadow-2xl bg-white dark:bg-darkBg h-96
    md:h-screen fixed z-10 px-4 py-8"
  >
    <slot />
  </div>
</template>
