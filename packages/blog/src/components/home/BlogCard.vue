<script setup lang="ts">
import { computed } from 'vue'
import { useIsMobile } from '../../composables'
import type { Blog } from '@/types'

interface Props {
  blog: Blog
}

const props = defineProps<Props>()

const { isMobile } = useIsMobile()
const toDetail = computed(() => `/detail/blog?id=${props.blog._id}`)
</script>

<template>
  <div class="flex py-4 md:py-6 border-b">
    <div class="md:w-96">
      <a :href="toDetail">
        <img v-if="!isMobile" width="800" height="600" class="w-full h-full" :src="blog.cover" alt="">
      </a>
    </div>
    <div class="flex flex-col md:ml-4">
      <p class="text-gray-400">
        {{ blog.createdAt }}
      </p>
      <a :href="toDetail">
        <h3
          class="text-xl md:text-2xl text-black dark:text-gray-500 font-semibold hover:text-pink-500 cursor-pointer"
        >
          {{ blog.title }}
        </h3>
      </a>
      <img v-if="isMobile" width="800" height="600" src="../../assets/image1.jpg" alt="">
      <p class="text-gray-400">
        {{ blog.description }}
      </p>
    </div>
  </div>
</template>
