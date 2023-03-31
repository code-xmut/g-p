<script setup lang="ts">
import BlogCard from '../components/home/BlogCard.vue'
import BlogCategory from '../components/home/BlogCategory.vue'
</script>

<template>
  <div class="py-2 px-[3vw] lg:px-[12vw]">
    <div class="lg:mt-[8vw] mb-4 lg:mb-10">
      <h1 class="text-3xl lg:text-5xl font-bold text-black dark:text-gray-500">
        Courtside:
        <br>
        The Capalot Blog
      </h1>
    </div>
    <div class="flex flex-col xl:flex-row justify-between">
      <div class="xl:order-2 md:mr-28">
        <BlogCategory />
      </div>
      <div class="xl:order-1 xl:w-2/3">
        <BlogCard id="123456" />
        <BlogCard id="456789" />
        <BlogCard id="789123" />
      </div>
    </div>
  </div>
</template>
