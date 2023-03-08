<script setup lang="ts">

</script>

<template>
  <div class="text-sm">
    <span>
      {{ $t('register.already_have_account') }}
    </span>
    <Link
      :text="$t('register.go_to_login')"
      @click="$router.push({ name: 'auth', query: { pattern: 'login' } })"
    />
  </div>
  <div class="text-xs text-center mt-20 md:mt-1 lg:mt-20">
    <p>{{ $t('register.footer') }}</p>
    <Link :text="$t('register.terms_and_policy')" />
  </div>
</template>
