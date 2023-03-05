<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="flex items-center md:order-2">
    <Button
      class="btn btn-outline btn-accent"
      text="Get started"
    />
    <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
      <Icon class="w-6 h-6" icon="mdi:menu" />
    </button>
    <div>
      <img class="w-10 h-10 rounded-full ml-4" src="@/assets/images/image2.jpg" alt="">
    </div>
  </div>
</template>
