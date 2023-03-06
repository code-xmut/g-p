<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <Button
    class="btn btn-primary rounded-sm text-base w-72 mt-4"
    text="创建"
  />
  <div class="mt-4 mb-6">
    <p class="text-sm text-center text-gray-500">
      其他登录方式
    </p>
    <div class="flex justify-between w-72">
      <Button
        class="btn btn-active btn-ghost btn-sm font-medium text-xs rounded-sm w-2/5 flex items-center justify-around"
        text="Facebook"
      >
        <template #frontIcon>
          <Icon icon="logos:facebook" class="w-5 h-5" />
        </template>
      </Button>
      <Button
        class="btn btn-active btn-ghost btn-sm font-medium text-xs rounded-sm w-2/5 flex items-center justify-around"
        text="Google"
      >
        <template #frontIcon>
          <Icon icon="logos:google-icon" class="w-5 h-5" />
        </template>
      </Button>
    </div>
  </div>
  <div class="text-sm">
    <span>
      已有账号?
    </span>
    <a class="link text-sky-600 ml-2">去登陆</a>
  </div>
</template>
