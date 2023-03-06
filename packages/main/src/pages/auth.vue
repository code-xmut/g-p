<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { useRoute } from 'vue-router'

const route = useRoute()
const patter = computed(() => {
  if (route.query.pattern === 'login')
    return 'login'

  return 'register'
})

useTitle('Login | Capalot')
</script>

<template>
  <div class="flex md:flex-col lg:flex-row w-screen h-screen text-black">
    <LoginGirl />
    <div class="w-full h-full lg:w-2/5 py-5 text-[#37465B] bg-white dark:bg-darkBg flex flex-col justify-center items-center">
      <Register v-if="patter === 'register'" />
      <Login v-else />
    </div>
  </div>
</template>
