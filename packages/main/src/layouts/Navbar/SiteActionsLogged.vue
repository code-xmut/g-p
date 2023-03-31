<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const toProfile = () => {
  router.push({ name: 'profile' })
}
</script>

<template>
  <li>
    <Avatar
      class="ml-8" :show-status="false" size-class="w-10 h-10"
      @click="toProfile"
    />
  </li>
  <li class="hidden lg:block">
    <Button
      class="ml-4 btn btn-secondary" text="upload"
      @click="$router.push({ name: 'uploads' })"
    />
  </li>
</template>
