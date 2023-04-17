<script setup lang="ts">
import { useUser } from '@/composables/useUser'

const { userName, user } = useUser()
</script>

<template>
  <div class="flex items-center space-x-4 mb-8">
    <Avatar
      size-class="w-12"
      :src="user.avatar"
    />
    <div>
      <h2 class="text-xl">
        <RouterLink :to="`/${userName}`" class="cursor-pointer">
          {{ userName }}
        </RouterLink> / <strong>编辑个人资料</strong>
      </h2>
      <p class="text-gray-400">
        设置你的个人信息
      </p>
    </div>
  </div>
</template>
