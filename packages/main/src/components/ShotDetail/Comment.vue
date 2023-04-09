<script setup lang="ts">
import type { CommentDto } from '@gp/types'
import type { UserInfo } from '@gp/types/user'

interface Props {
  comment: CommentDto
}

const props = defineProps<Props>()
const user = JSON.parse(props.comment.user) as UserInfo
</script>

<template>
  <div class="flex items-start py-1">
    <Avatar class="mt-2" size-class="w-12 h-12" :src="user.avatar" />
    <div class="flex flex-col">
      <p class="text-lg text-gray-800 dark:text-gray-400">
        {{ user.name }}
      </p>
      <p class="dark:text-gray-600">
        {{ comment.content }}
      </p>
      <p v-time="comment.createdAt" />
    </div>
  </div>
</template>
