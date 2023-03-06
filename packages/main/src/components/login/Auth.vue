<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <h2 class="text-2xl font-semibold mb-1 text-[#37465B]">
    创建您的免费账户
  </h2>
  <h3 class="flex text-sm mb-6">
    <Icon icon="mdi:check" class="w-6 h-6 text-green-900" />
    <span>无需任何费用</span>
  </h3>
  <LoginForm />
  <LoginButtons />
  <LoginFooter />
</template>
