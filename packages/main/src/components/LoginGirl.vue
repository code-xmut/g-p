<script setup lang="ts">
import { useIsMobile } from '@/composables'
const { isMobile } = useIsMobile()
</script>

<template>
  <div v-if="!isMobile" class="w-full h-2/5 lg:h-full lg:w-3/5 bg-darkBg mx-auto flex justify-center items-center xs:hidden">
    <img class="w-3/5 h-3/5 block md:w-full md:h-full" src="@/assets/images/log-in-girl.svg" alt="">
  </div>
</template>
