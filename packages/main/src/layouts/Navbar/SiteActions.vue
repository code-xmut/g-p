<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <ul class="flex justify-center items-center space-x-2">
    <li class="hidden lg:block">
      <div class="relative hidden md:block">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon class="w-6 h-6" icon="mdi:magnify" />
        </div>
        <Input class="pl-10" />
      </div>
    </li>
    <li>
      <Link class="no-underline" text="Sign in" />
    </li>
    <li class="hidden lg:block">
      <Button class="btn btn-secondary" text="Sign up" />
    </li>
  </ul>
</template>
