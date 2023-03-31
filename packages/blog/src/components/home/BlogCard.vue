<script setup lang="ts">
import { computed } from 'vue'
import { useIsMobile } from '../../composables'

interface Props {
  id?: string
}

const props = defineProps<Props>()

const { isMobile } = useIsMobile()
const toDetail = computed(() => `/blog/${props.id}`)
</script>

<template>
  <div class="flex py-4 md:py-6 border-b">
    <div class="md:w-96">
      <a :href="toDetail">
        <img v-if="!isMobile" width="800" height="600" class="w-full h-full" src="../../assets/image1.jpg" alt="">
      </a>
    </div>
    <div class="flex flex-col md:ml-4">
      <p class="text-gray-400">
        Mar 13,2023
      </p>
      <h3
        class="text-xl md:text-2xl text-black dark:text-gray-500 font-semibold hover:text-pink-500 cursor-pointer"
        @click="$router.push(`/${id}`)"
      >
        7 Stunning Case Studies from Dribbble's UI Design Graduates
      </h3>
      <img v-if="isMobile" width="800" height="600" src="../../assets/image1.jpg" alt="">
      <p class="text-gray-400">
        Showcasing the incredible work of our Introduction to UI Design course graduates! See how students tackled
        designing a new NFT Marketplace.
      </p>
    </div>
  </div>
</template>
