<script setup lang="ts">
import SiteActionsLogged from './SiteActionsLogged.vue'

const logged = computed((): boolean => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  return user && user.token
})
</script>

<template>
  <ul class="flex justify-center items-center space-x-2">
    <li class="hidden lg:block">
      <div class="hidden md:block">
        <Input show-icon />
      </div>
    </li>
    <template v-if="logged">
      <li>
        <Link
          class="no-underline" text="Sign in"
          @click="$router.push({ name: 'auth', query: { pattern: 'login' } })"
        />
      </li>
      <li class="hidden lg:block">
        <Button
          class="btn btn-secondary" text="Sign up"
          @click="$router.push({ name: 'auth', query: { pattern: 'register' } })"
        />
      </li>
    </template>
    <SiteActionsLogged v-else />
  </ul>
</template>
