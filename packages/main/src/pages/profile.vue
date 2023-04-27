<script setup lang="ts">
import Profile from '@/components/Profile/index.vue'

const tabs = reactive([
  {
    name: 'Work',
    slotName: 'Work',
    routerName: 'work',
  },
  {
    name: 'Draft',
    slotName: 'Draft',
    routerName: 'draft',
  },
  {
    name: 'Collections',
    slotName: 'Collections',
    routerName: 'collections',
  },
  {
    name: 'Liked shots',
    slotName: 'LikedShots',
    routerName: 'liked',
  },
  {
    name: 'About',
    slotName: 'About',
    routerName: 'about',
  },
])
</script>

<template>
  <div class="flex flex-col md:justify-center md:items-center">
    <Profile />
  </div>
  <div class="lg:px-20">
    <Tabs :tabs="tabs" class="pt-24 pb-6 w-full border-b border-gray-400" />
  </div>
</template>
