<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import SideItem from './SideItem.vue'
import Card from '@/components/Card.vue'

const isDark = useDark()
const toggle = useToggle(isDark)
</script>

<template>
  <aside
    id="sidebar-multi-level-sidebar"
    class="fixed top-0 left-5 z-40 w-16 h-screen transition-transform -translate-x-[140%] sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class=" h-5/6 px-3 py-4 rounded-2xl overflow-y-auto mt-20 bg-gray-50 dark:bg-[#1d1c23]">
      <ul class="space-y-2">
        <li v-for="i in 6" :key="i">
          <SideItem />
        </li>
      </ul>
      <div class="fixed bottom-28">
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" class="sr-only peer" @click="toggle()">
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
        </label>
      </div>
    </div>
  </aside>

  <div class="p-4 sm:ml-64">
    <div class="p-4 h-screen border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <Card />
    </div>
  </div>
</template>
