<script setup lang="ts">
import { useShotStore } from '@/store'

const store = useShotStore()

const menus = reactive([
  {
    name: 'folder',
    icon: 'mdi:folder',
  },
  {
    name: 'like',
    icon: 'mdi-heart',
    cb: store.likeShot,
  },
])
</script>

<template>
  <ul class="flex space-x-2">
    <li
      v-for="m in menus" :key="m.name"
      class="shadow-[0px_0px_0px_1px_#e7e7e9_inset] rounded-lg px-3 py-2.5 cursor-pointer"
      @click="m.cb && m.cb()"
    >
      <Icon :icon="m.icon" />
    </li>
  </ul>
</template>
