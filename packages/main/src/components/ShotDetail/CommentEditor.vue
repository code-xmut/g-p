<script setup lang="ts">
import { useShotStore } from '@/store'

const store = useShotStore()
</script>

<template>
  <div class="flex items-end">
    <textarea v-model="store.comment.content" class="textarea textarea-secondary bg-white dark:bg-transparent w-full" placeholder="leave you feedback" />
    <Button class="btn-secondary btn-sm ml-2 px-4" @click="store.createComment()">
      <Icon icon="ri:send-plane-fill" />
    </Button>
  </div>
</template>
