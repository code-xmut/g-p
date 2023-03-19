<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { useRoute } from 'vue-router'

const route = useRoute()
const pattern = computed(() => {
  if (route.query.pattern === 'login')
    return 'login'
  else if (route.query.pattern === 'recover')
    return 'recover'

  return 'register'
})

useTitle('Capalot - auth')
</script>

<template>
  <div class="flex md:flex-col lg:flex-row w-screen h-screen text-black">
    <LoginGirl />
    <div class="w-full h-full lg:w-2/5 py-5 text-[#37465B] bg-white dark:bg-darkBg flex flex-col justify-center items-center">
      <Register v-if="pattern === 'register'" />
      <RecoverPassword v-else-if="pattern === 'recover'" />
      <Login v-else />
    </div>
  </div>
</template>
