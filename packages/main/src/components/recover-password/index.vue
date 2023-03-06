<script setup lang="ts">
const email = ref('')
</script>

<template>
  <h2 class="text-2xl font-semibold mb-1 text-[#37465B]">
    {{ $t('recover.title') }}
  </h2>
  <p
    class="mb-6 mt-2 w-80 text-center text-sm text-gray-500"
  >
    {{ $t('recover.description') }}
  </p>
  <RecoverPasswordForm />
  <Link class="mt-4" :text="$t('recover.back_to_login')" @click="$router.push({ name: 'login', query: { pattern: 'login' } })" />
</template>
