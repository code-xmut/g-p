<script setup lang="ts">
import { useShotStore } from '@/store'

interface Props {
  userName: string
  showSaveModal?: boolean
}

defineProps<Props>()
defineEmits(['update:show-save-modal'])

const store = useShotStore()
</script>

<template>
  <div
    class="space-y-4 mb-4 flex flex-col md:px-4 md:flex-row md:justify-between md:items-center"
  >
    <p class="text-2xl font-semibold text-gray-900 dark:text-gray-400 md:hidden">
      {{ store.shotAuthor?.name }}
    </p>
    <Avatar :src="store.shotAuthor?.avatar" :user-name="userName" size-class="w-14 h-14">
      <div class="flex flex-col">
        <p class="text-xl font-semibold text-gray-900 dark:text-gray-400 ml-4 hidden md:block">
          {{ store.shotAuthor?.name }}
        </p>
        <p class="flex items-center ml-3 text-gray-700 dark:text-gray-400">
          <Icon icon="material-symbols:location-on-outline" class="w-4 h-4" />
          {{ store.shotAuthor?.location }}
        </p>
      </div>
    </Avatar>
    <div class="hidden md:flex md:items-center space-x-4">
      <Button text="Save" @click="$emit('update:show-save-modal', true)" />
      <Button class="btn-secondary" text="Like" @click="store.likeShot()">
        <template #frontIcon>
          <Icon icon="mdi-heart" />
        </template>
      </Button>
    </div>
    <div class="flex justify-between px-4 items-center md:hidden">
      <DetailMenus />
      <ShotActions v-model:show="store.showCommentDrawer" />
    </div>
  </div>
</template>
