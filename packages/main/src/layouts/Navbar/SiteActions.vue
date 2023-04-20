<script setup lang="ts">
import SiteActionsLogged from './SiteActionsLogged.vue'
import { useIsMobile } from '@/composables'

const { isMobile } = useIsMobile()

const q = ref('')

const logged = computed((): boolean => {
  const token = localStorage.getItem('token') || '{}'
  if (token === '{}')
    return false
  return true
})
</script>

<template>
  <ul v-if="!isMobile" class="flex justify-center items-center space-x-2">
    <li>
      <Input v-model:value="q" show-icon @keydown.enter="$router.push(`/search/${q}`)" />
    </li>
    <template v-if="!logged">
      <li>
        <Link
          class="no-underline" text="Sign in"
          @click="$router.push({ name: 'auth', query: { pattern: 'login' } })"
        />
      </li>
      <li v-if="!isMobile">
        <Button
          class="btn btn-secondary" text="Sign up"
          @click="$router.push({ name: 'auth', query: { pattern: 'register' } })"
        />
      </li>
    </template>
    <SiteActionsLogged v-else />
  </ul>
</template>
