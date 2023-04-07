<script setup lang="ts">
import type { UserInfo } from '@gp/types/user'

const user: UserInfo = computed(() => JSON.parse(localStorage.getItem('user') || '{}'))
</script>

<template>
  <div class="flex flex-col space-y-4 md:flex-row">
    <Avatar size-class="w-24 w-24 ml-10 md:ml-0 md:w-48 md:h-48" :show-status="false" />
    <div class="flex flex-col justify-between ml-10">
      <h1 class="text-5xl text-gray-900 dark:text-gray-500">
        {{ user.name }}
      </h1>
      <h2 class="text-xl">
        {{ user.location }}
      </h2>
      <div>
        <Button class="btn btn-accent" text="Edit" />
        <Button class="btn-ghost ml-4" text="..." />
      </div>
    </div>
  </div>
</template>
