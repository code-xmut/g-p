<script setup lang="ts">

</script>

<template>
  <div class="px-2.5 lg:px-10 py-12 text-gray-900 dark:text-gray-500">
    <h1
      class="text-2xl lg:text-6xl font-bold"
    >
      家具
    </h1>
    <p class="text-gray-500 py-2 lg:py-6">
      3 Shots · 3 Designer
    </p>
    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center">
      <Avatar class="my-4" />
      <div>
        <Button class="btn-outline btn-secondary" text="Edit Collection" />
        <Button class="ml-6 btn-outline btn-secondary" text="Delete Collection" />
      </div>
    </div>
  </div>
  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-9 px-2.5 lg:px-10">
    <li v-for="i in 9" :key="i">
      <Shot />
    </li>
  </ul>
</template>
