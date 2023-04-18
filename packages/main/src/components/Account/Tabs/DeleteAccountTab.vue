<script setup lang="ts">
import { useUser } from '@/composables'

const { DeleteAccount } = useUser()
</script>

<template>
  <div class="px-2">
    <div
      class="shadow-[0_2px_8px_2px_rgba(13,12,34,0.08)] border rounded-lg cursor-pointer px-5 py-6
      my-0 mx-auto max-w-[30em] space-y-2"
    >
      <img
        class="rounded-lg"
        src="https://cdn.dribbble.com/assets/art-banners/sad-boy-sad-girl-0ac3dc7e87dac58b4f4205b8fecc63c7a83ebb916104b0c17afff00cc0cbb80f.jpg" alt=""
      >
      <h1 class="text-5xl md:text-6xl font-bold leading-tight">
        你的离开让我们很伤心
      </h1>
      <p>
        如果你是对现在的用户名不满意，你可以
        <RouterLink class="text-secondary" to="/account">
          在这
        </RouterLink> 修改它。
      </p>
      <p>
        请注意，删除账户后，你的所有数据都将被永久删除，无法恢复。
      </p>
      <div class="flex justify-end">
        <Button text="我点错了" class="btn-secondary mr-2" @click="$router.back()" />
        <Button text="删除我的账户" class="btn-ghost" @click="DeleteAccount" />
      </div>
    </div>
  </div>
</template>
