<script setup lang="ts">
interface Props {
  show?: boolean
  title?: string
  content?: string
}

withDefaults(defineProps<Props>(), {
  show: false,
  title: 'Congratulations random Internet user!',
  content: 'You\'ve been selected for a chance to get one year of subscription to use Wikipedia for free!',
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<template>
  <input id="my-modal" type="checkbox" class="modal-toggle">
  <div v-if="show" class="modal modal-open">
    <div class="modal-box">
      <slot v-if="$slots.title" name="title" />
      <h3 class="font-bold text-lg">
        {{ title }}
      </h3>
      <slot v-if="$slots.content" name="content" />
      <p v-else class="py-4">
        {{ content }}
      </p>
      <div class="modal-action">
        <slot v-if="$slots.action" name="action" />
        <label v-else for="my-modal" class="btn" @click="close">Yay!</label>
      </div>
    </div>
  </div>
</template>
