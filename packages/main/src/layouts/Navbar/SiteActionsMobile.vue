<script setup lang="ts">
import { useUser } from '@/composables'

interface Props {
  menus: Array<{ name: string; link: string; icon?: string }>
}

defineProps<Props>()

const { user, isLogged } = useUser()
</script>

<template>
  <div v-if="isLogged">
    <Avatar :src="user.avatar" size-class="w-12" :user-name="user.name" class="text-xl" />
    <ul class="space-y-6 mt-6 text-xl font-semibold">
      <li v-for="menu in menus" :key="menu.name">
        <RouterLink :to="menu.link" class="flex items-center">
          {{ menu.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
