<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="mt-4 mb-6 dark:text-gray-400">
    <p class="text-sm text-center">
      {{ $t('auth.other_login_ways') }}
    </p>
    <div class="flex justify-between w-72">
      <Button
        class="btn btn-active btn-ghost btn-sm font-medium text-xs rounded-sm w-2/5"
        :text="$t('auth.by_facebook')"
      >
        <template #frontIcon>
          <Icon icon="logos:facebook" class="w-5 h-5" />
        </template>
      </Button>
      <Button
        class="btn btn-active btn-ghost btn-sm font-medium text-xs rounded-sm w-2/5"
        :text="$t('auth.by_google')"
      >
        <template #frontIcon>
          <Icon icon="logos:google-icon" class="w-5 h-5" />
        </template>
      </Button>
    </div>
  </div>
</template>
