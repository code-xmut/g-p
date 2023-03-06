<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { useIsMobile } from '@/composables'

useTitle('Login | Capalot')
const { isMobile } = useIsMobile()
</script>

<template>
  <div class="flex md:flex-col lg:flex-row w-screen h-screen text-black">
    <div v-if="!isMobile" class="w-full h-2/5 lg:h-full lg:w-3/5 bg-darkBg mx-auto flex justify-center items-center xs:hidden">
      <img class="w-3/5 h-3/5 block md:w-full md:h-full" src="@/assets/images/log-in-girl.svg" alt="">
    </div>
    <div class="w-full h-full lg:w-2/5 py-5 text-[#37465B] bg-white dark:bg-darkBg flex flex-col justify-center items-center">
      <Auth />
    </div>
  </div>
</template>
