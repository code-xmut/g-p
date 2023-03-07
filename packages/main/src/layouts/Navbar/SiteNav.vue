<script setup lang="ts">
import { Icon } from '@iconify/vue'

const navs = computed(() => {
  return [
    {
      name: 'Home',
    },
    {
      name: 'About',
    },
    {
      name: 'Contact',
    },
  ]
})

const showDrawer = ref(false)
const navIcon = computed(() => {
  return showDrawer.value ? 'mdi:close' : 'mdi:menu'
})
</script>

<template>
  <Icon class="w-6 h-6 lg:hidden" :icon="navIcon" @click="showDrawer = !showDrawer" />
  <Drawer :show="showDrawer" />
  <div class="flex justify-center items-center">
    <a href="#">
      <img src="@/assets/images/image2.jpg" class="w-12 h-12 rounded-full" alt="">
    </a>
    <ul class="space-x-6 ml-6 text-sm hidden lg:flex">
      <li
        v-for="n in navs"
        :key="n.name" class="flex"
      >
        <Link class="no-underline" :text="n.name" />
      </li>
    </ul>
  </div>
</template>
