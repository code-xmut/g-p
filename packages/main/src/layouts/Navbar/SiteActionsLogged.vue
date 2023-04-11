<script setup lang="ts">
import { useUserStore } from '@/store'
import { useUser } from '@/composables'

const store = useUserStore()
const { userName } = useUser()

const dropdownMenu = computed(() => {
  return [
    {
      name: 'Profile',
      link: `/${store.user.name}`,
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
      name: 'My Likes',
      link: `/${userName}/liked`,
      icon: 'mdi:heart',
    },
    {
      name: 'My Collections',
      link: `/${userName}/collections`,
      icon: 'material-symbols:create-new-folder',
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
        <ul v-for="d in dropdownMenu" :key="d.name" class="group px-1 my-1">
          <li
            class="group-first:border-b group-[:nth-child(3)]:border-b group-first:border-gray-400
            group-last:border-t group-last:border-gray-400"
          >
            <RouterLink :to="d.link" @click="d.cb">
              <Icon v-if="d.icon" class="w-6 h-6" :icon="d.icon" />

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
