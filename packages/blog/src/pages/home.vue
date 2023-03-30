<script setup lang="ts">
import BlogCard from '../components/BlogCard.vue'
import BlogCategory from '@/components/BlogCategory.vue';

</script>

<template>
  <div>
    <div>
      <h1 class="text-3xl font-bold text-black dark:text-gray-500">
        Courtside:
        <br>
        The Capalot Blog
      </h1>
    </div>
    <div class="flex flex-col xl:flex-row justify-between">
      <div class="xl:order-2 xl:mr-40">
        <BlogCategory />
      </div>
      <div class="xl:order-1 xl:w-2/3">
        <div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  </div>
</template>
