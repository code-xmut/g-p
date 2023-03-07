<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const isDark = useDark()
const toggle = useToggle(isDark)

const darkModeIcon = computed(() => {
  return isDark.value ? 'mdi:weather-sunny' : 'mdi:weather-night'
})
</script>

<template>
  <main class="p-4">
    <div class="p-4 min-h-screen dark:border-gray-700">
      <div class="fixed bottom-28 left-1/2 -translate-x-[50%] cursor-pointer" @click="toggle()">
        <Icon class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400" :icon="darkModeIcon" />
      </div>
    </div>
  </main>
</template>
