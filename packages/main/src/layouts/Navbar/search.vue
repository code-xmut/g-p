<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div id="navbar-cta" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
    <div class="relative">
      <Input />
      <Button class="absolute -right-7 bottom-0 px-6 btn dark:btn-accent" rounded="3xl">
        <template #icon>
          <Icon class="w-6 h-6 text-white" icon="mdi:magnify" />
        </template>
      </Button>
    </div>
  </div>
</template>
