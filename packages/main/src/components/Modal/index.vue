<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

interface Props {
  show: boolean
  noTitle?: boolean
  title?: string
  content?: string
  fullScreen?: boolean
  closeIcon?: boolean
  noActions?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  noTitle: false,
  title: 'Congratulations random Internet user!',
  content: 'You\'ve been selected for a chance to get one year of subscription to use Wikipedia for free!',
  fullScreen: false,
  closeIcon: false,
  noActions: false,
})

const emit = defineEmits(['close', 'confirm'])

const target = ref<HTMLElement>()

const close = () => {
  emit('close')
}

onClickOutside(target, close)

const isFullScreen = computed(() => {
  return {
    'w-screen': props.fullScreen,
    'h-screen': props.fullScreen,
    'top-0': props.fullScreen,
  }
})
</script>

<template>
  <div>
    <input id="my-modal" type="checkbox" class="modal-toggle">
    <div v-if="show" class="modal modal-open">
      <div
        ref="target"
        class="modal-box max-w-full bg-white dark:bg-darkBg"
        v-bind="$attrs"
        :class="isFullScreen"
      >
        <label v-if="closeIcon" for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2" @click="$emit('close')">✕</label>
        <slot v-if="$slots.title" name="title" />
        <h3 v-else-if="!noTitle" class="font-bold text-lg">
          {{ title }}
        </h3>
        <slot v-if="$slots.content" name="content" />
        <p v-else class="py-4">
          {{ content }}
        </p>
        <div v-if="!noActions" class="modal-action">
          <slot v-if="$slots.action" name="action" />
          <template v-else>
            <Button class="btn-ghost" text="cancel" @click="close" />
            <Button class="btn-primary" text="confirm" @click="$emit('confirm')" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
