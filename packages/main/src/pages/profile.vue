<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Profile from '@/components/Profile/index.vue'

const { t } = useI18n();

const tabs = reactive([
  {
    name: t('profile.work'),
    slotName: 'Work',
    routerName: 'work',
  },
  {
    name: t('profile.draft'),
    slotName: 'Draft',
    routerName: 'draft',
  },
  {
    name: t('profile.collections'),
    slotName: 'Collections',
    routerName: 'collections',
  },
  {
    name: t('profile.liked_shots'),
    slotName: 'LikedShots',
    routerName: 'liked',
  },
  {
    name: t('profile.about'),
    slotName: 'About',
    routerName: 'about',
  },
])
</script>

<template>
  <div class="flex flex-col md:justify-center md:items-center">
    <Profile />
  </div>
  <div class="lg:px-20">
    <Tabs :tabs="tabs" class="pt-24 pb-6 w-full border-b border-gray-400" />
  </div>
</template>
