<script setup lang="ts">
import { useUserStore } from '@/store'

const store = useUserStore()

const dropdownMenu = computed(() => {
  return [
    {
      name: 'Profile',
      link: '/profile',
    },
    {
      name: 'Edit Profile',
      link: '/edit-profile',
    },
    {
      name: 'Account Settings',
      link: '/setting',
    },
    {
      name: 'Sign out',
      link: '/',
      cb: store.logout,
    },
  ]
})
</script>

<template>
  <li>
    <Dropdown class="dropdown-end">
      <Avatar
        class="ml-8" :show-status="false" size-class="w-10 h-10"
      />
      <template #content>
        <ul v-for="d in dropdownMenu" :key="d.name" class="group px-2">
          <li class="group-first:border-b group-first:border-gray-400 group-last:border-t group-last:border-gray-400">
            <RouterLink :to="d.link" @click="d.cb">
              {{ d.name }}
            </RouterLink>
          </li>
        </ul>
      </template>
    </Dropdown>
  </li>
  <li class="hidden lg:block">
    <Button
      class="ml-4 btn btn-secondary" text="upload"
      @click="$router.push({ name: 'uploads' })"
    />
  </li>
</template>
