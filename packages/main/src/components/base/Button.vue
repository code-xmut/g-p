<script setup lang="ts">
export interface Props {
  text?: string
  disabled?: boolean
}

withDefaults(
  defineProps<Props>(),
  {
    disabled: false,
  },
)
</script>

<template>
  <button
    v-bind="$attrs"
    class="btn"
    :class="[
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
  >
    <slot v-if="$slots.frontIcon" name="frontIcon" />
    <span v-if="text !== ''">
      {{ text }}
    </span>
    <slot v-if="$slots.icon" name="icon" />
  </button>
</template>
