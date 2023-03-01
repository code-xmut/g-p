<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Button from '@/components/base/Button.vue'
</script>

<template>
  <nav class="bg-white border-gray-200 px-2 pt-5 sm:px-4 dark:bg-[#131219] sm:pl-64">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <div class="flex items-center md:order-2">
        <Button />
        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
          <Icon class="w-6 h-6" icon="mdi:menu" />
        </button>
        <div>
          <img class="w-10 h-10 rounded-full ml-4" src="@/assets/images/image2.jpg" alt="">
        </div>
      </div>
      <div id="navbar-cta" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <form>
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <input
              id="default-search" type="search" class="block w-full min-w-[300px] p-3 pr-12 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50
          dark:placeholder-gray-400 dark:text-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" placeholder="Search Mockups, Logos..." required
            >
            <Button class="absolute -right-7 bottom-0 px-6 py-3" rounded="3xl">
              <template #icon>
                <Icon class="w-6 h-6" icon="mdi:magnify" />
              </template>
            </Button>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>
