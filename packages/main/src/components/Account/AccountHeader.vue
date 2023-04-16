<script setup lang="ts">
import { useUser } from '@/composables/useUser'

const { userName } = useUser()
</script>

<template>
  <div class="flex items-center space-x-4 mb-8">
    <Avatar
      size-class="w-12"
      src="https://images.pexels.com/photos/450038/pexels-photo-450038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />
    <div>
      <h2 class="text-xl">
        <RouterLink :to="`/${userName}`" class="cursor-pointer">
          {{ userName }}
        </RouterLink> / <strong>编辑个人资料</strong>
      </h2>
      <P class="text-gray-400">
        设置你的个人信息
      </P>
    </div>
  </div>
</template>
