<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  title: string
  content: Array<any>
}

withDefaults(defineProps<Props>(), {
  title: 'show/hide content',
})

const checked = ref(false)
</script>

<template>
  <div class="collapse">
    <input v-model="checked" type="checkbox" class="peer">
    <div v-if="$slots.title" class="collapse-title">
      <slot name="title" />
    </div>
    <div
      v-else
      class="collapse-title pl-0 pr-0 flex justify-between items-center"
    >
      <span>
        {{ title }}
      </span>
      <Icon class="w-6 h-6" :icon="checked ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
    </div>
    <div class="collapse-content space-y-6">
      <slot v-if="$slots.default" />
      <template v-else>
        <p
          v-for="c in content"
          :key="c.name"
        >
          {{ c.name }}
        </p>
      </template>
    </div>
  </div>
</template>
