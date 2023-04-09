<script setup lang="ts">
import { useShotStore } from '@/store'

const store = useShotStore()
</script>

<template>
  <div>
    <CommentMenus />
    <CommentEditor />
    <h3 class="text-2xl font-semibold text-gray-900 dark:text-gray-700 py-2">
      FeedBack
    </h3>
    <div v-for="c in store.comments" :key="c._id">
      <Comment :comment="c" />
    </div>
  </div>
</template>
