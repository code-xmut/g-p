<script setup lang="ts">
import type { UserInfo } from '@gp/types/user'
import { userApi } from '@/api'

interface Props {
  userName: string
}

const props = defineProps<Props>()

const user = ref<UserInfo | null>(null)
const menus = reactive([
  {
    name: 'folder',
    icon: 'mdi:folder',
  },
  {
    name: 'like',
    icon: 'mdi-heart',
  },
])

onMounted(async () => {
  const { data } = await userApi.getUser(props.userName)
  user.value = data
})
</script>

<template>
  <div
    class="space-y-4 mb-4 flex flex-col md:px-4 md:flex-row md:justify-between md:items-center"
  >
    <Avatar :src="user?.avatar" :user-name="userName" size-class="w-14 h-14">
      <div class="flex flex-col">
        <p class="text-xl font-semibold text-gray-900 dark:text-gray-400 ml-4">
          {{ user?.name }}
        </p>
        <p class="flex ml-3 text-gray-700 dark:text-gray-400">
          <Icon icon="material-symbols:location-on-outline" class="w-4 h-4" />
          {{ user?.location }}
        </p>
      </div>
    </Avatar>
    <div class="hidden md:flex md:items-center space-x-4">
      <Button text="Save" />
      <Button class="btn-secondary" text="Like">
        <template #frontIcon>
          <Icon icon="mdi-heart" />
        </template>
      </Button>
    </div>
    <div class="flex justify-between items-center md:hidden">
      <ul class="flex space-x-2">
        <li
          v-for="m in menus" :key="m.name"
          class="shadow-[0px_0px_0px_1px_#e7e7e9_inset] rounded-lg px-3 py-2.5 cursor-pointer"
        >
          <Icon :icon="m.icon" />
        </li>
      </ul>
      <ShotActions />
    </div>
  </div>
</template>
