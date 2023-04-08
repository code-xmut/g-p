<script setup lang="ts">
const props = withDefaults(defineProps<{
  show: boolean
  showBack?: boolean
}>(), {
  show: false,
  showBack: false,
})
defineEmits(['update:show'])

watchEffect(() => {
  if (props.show)
    document.body.classList.add('overflow-hidden')

  else
    document.body.classList.remove('overflow-hidden')
})
</script>

<template>
  <div
    v-if="show"
    style="height: calc(100vh - 68px);"
    class="w-full overflow-y-scroll absolute bottom-0 bg-white dark:bg-darkBg left-0 p-4 z-50"
  >
    <div v-if="showBack" class="flex justify-end">
      <Icon icon="ic:twotone-keyboard-arrow-right" class="w-6 h-6 cursor-pointer" @click="$emit('update:show', false)" />
    </div>
    <slot />
  </div>
</template>
