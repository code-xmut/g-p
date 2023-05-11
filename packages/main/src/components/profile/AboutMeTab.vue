<script setup lang="ts">
import { useUser } from '@/composables';

const { userBio, userLocation, userCreatedAt } = useUser();
</script>

<template>
  <div class="w-4/5 mx-auto flex">
    <div class="hover:shadow-[0_2px_8px_2px_rgba(13,12,34,0.08)] p-4 rounded-md flex justify-between group w-1/2">
      <div>
        <p class="font-semibold text-lg">个人简介</p>
        <p class="text-pink-500 mt-2">{{ userBio }}</p>
      </div>
      <p class="hidden group-hover:block text-pink-500 cursor-pointer hover:text-pink-400" @click="$router.push({ name: 'edit-profile' })">
        编辑
      </p>
    </div>
    <div class="w-1/2 pl-10">
      <div class="space-y-2 bg-gray-100 dark:bg-gray-500 p-6 rounded-md">
        <p class="flex items-center">
          <Icon class="mr-2 w-5 h-5" icon="material-symbols:location-on-rounded" />{{ userLocation }}
        </p>
        <p class="flex items-center">
          <Icon class="mr-2 w-5 h-5" icon="icon-park-outline:id-card-h" />注册于{{ userCreatedAt.slice(0, 10) }}
        </p>
      </div>
      <div>
        <p class="text-xl font-semibold mt-4">Social</p>
        <div class="flex items-center">
          <Icon icon="fe:github" class="w-8 h-8 mr-2" />
          <Link href="https://github.com/Rich4st" text="Github" />
        </div>
      </div>
    </div>
  </div>
</template>
