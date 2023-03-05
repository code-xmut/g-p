<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { useIsMobile } from '@/composables'

useTitle('Login | Capalot')
const { isMobile } = useIsMobile()
</script>

<template>
  <div class="flex md:flex-col lg:flex-row w-screen h-screen text-black">
    <div v-if="!isMobile" class="w-full h-2/5 lg:h-full md:w-3/5 mx-auto flex justify-center items-center xs:hidden">
      <img class="w-3/5 h-3/5 block md:w-full md:h-full" src="@/assets/images/log-in-girl.svg" alt="">
    </div>
    <div class="w-full h-full lg:w-2/5 bg-white text-[#37465B] flex flex-col justify-center items-center">
      <h2 class="text-2xl font-semibold mb-1">
        创建您的免费账户
      </h2>
      <h3 class="flex text-sm mb-6">
        <Icon icon="mdi:check" class="w-6 h-6 text-green-900" />
        <span>无需任何费用</span>
      </h3>
      <div class="mb-1">
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Name</label>
        <input
          id="first_name" type="text"
          class="input input-bordered bg-white w-72"
          placeholder="Name"
        >
      </div>
      <div class="mb-1">
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Email</label>
        <input
          id="first_name" type="text"
          class="input input-bordered bg-white w-72"
          placeholder="Email"
        >
      </div>
      <div class="mb-4">
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Password</label>
        <input
          id="first_name" type="text"
          class="input input-bordered bg-white w-72"
          placeholder="Password"
        >
      </div>
      <Button
        class="btn btn-primary rounded-sm text-base w-72"
        text="创建"
      />
      <div class="mt-4 mb-6">
        <p class="text-sm text-center text-gray-500">
          其他登录方式
        </p>
        <div class="flex justify-between w-72">
          <Button
            class="btn btn-active btn-ghost btn-sm font-medium text-xs rounded-sm w-2/5 flex items-center justify-around"
            text="Facebook"
          >
            <template #frontIcon>
              <Icon icon="logos:facebook" class="w-5 h-5" />
            </template>
          </Button>
          <Button
            class="btn btn-active btn-ghost btn-sm font-medium text-xs rounded-sm w-2/5 flex items-center justify-around"
            text="Google"
          >
            <template #frontIcon>
              <Icon icon="logos:google-icon" class="w-5 h-5" />
            </template>
          </Button>
        </div>
      </div>
      <div class="flex text-sm items-center">
        <p>
          已有账号?
        </p>
        <a class="link text-sky-600 ml-2">去登陆</a>
      </div>
    </div>
  </div>
</template>
