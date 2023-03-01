<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import SideItem from './SideItem.vue'
import Card from '@/components/Card.vue'

const isDark = useDark()
const toggle = useToggle(isDark)

const darkModeIcon = computed(() => {
  return isDark.value ? 'mdi:weather-sunny' : 'mdi:weather-night'
})

const sidebar = computed(() => {
  return [
    {
      icon: 'mdi:spa-outline',
      name: 'Home',
      href: '/',
    },
    {
      icon: 'mdi:rocket',
      name: 'Analytics',
      href: '/analytics',
    },
    {
      icon: 'mdi:robot-angry-outline',
      name: 'Automation',
      href: '/automation',
    },
    {
      icon: 'mdi:radio-tower',
      name: 'Security',
      href: '/security',
    },
    {
      icon: 'mdi:pig',
      name: 'Settings',
      href: '/settings',
    },
  ]
})
</script>

<template>
  <aside
    id="sidebar-multi-level-sidebar"
    class="fixed top-0 left-5 z-40 w-16 h-screen transition-transform -translate-x-[140%] sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class=" h-5/6 px-3 py-4 rounded-2xl overflow-y-auto mt-20 bg-gray-50 dark:bg-[#1d1c23]">
      <ul class="space-y-2">
        <li v-for="i in sidebar" :key="i.name">
          <SideItem>
            <Icon class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" :icon="i.icon" />
          </SideItem>
        </li>
      </ul>
      <div class="fixed bottom-28 left-1/2 -translate-x-[50%] cursor-pointer" @click="toggle()">
        <Icon class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400" :icon="darkModeIcon" />
      </div>
    </div>
  </aside>

  <div class="p-4 sm:ml-64">
    <div class="p-4 h-screen border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <Card />
    </div>
  </div>
</template>
