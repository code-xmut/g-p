<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import SiteActionsMobile from './SiteActionsMobile.vue'
import { useUserStore } from '@/store'
import { useIsMobile, useUser } from '@/composables'

const store = useUserStore()
const { userName, logout } = useUser()
const { isMobile } = useIsMobile()
const { t } = useI18n();

const dropdownMenu = computed(() => {
  return [
    {
      name: t('nav.profile'),
      link: `/${userName}`,
    },
    {
      name: t('nav.edit_profile'),
      link: '/account/profile',
    },
    {
      name: t('nav.account_settings'),
      link: '/setting',
    },
    {
      name: t('nav.my_likes'),
      link: `/${userName}/liked`,
      icon: 'mdi:heart',
    },
    {
      name: t('nav.my_collections'),
      link: `/${userName}/collections`,
      icon: 'material-symbols:create-new-folder',
    },
    {
      name: t('nav.sign_out'),
      link: '/',
      cb: logout,
    },
  ]
})
</script>

<template>
  <template v-if="!isMobile">
    <li>
      <Dropdown class="dropdown-end">
        <Avatar
          class="ml-8" :show-status="false" size-class="w-10 h-10"
          :src="store.user.avatar"
        />
        <template #content>
          <ul v-for="d in dropdownMenu" :key="d.name" class="group px-1 my-1">
            <li
              class="group-first:border-b group-[:nth-child(3)]:border-b group-first:border-gray-400
            group-last:border-t group-last:border-gray-400"
            >
              <RouterLink :to="d.link" @click="d.cb">
                <Icon v-if="d.icon" class="w-6 h-6" :icon="d.icon" />

                {{ d.name }}
              </RouterLink>
            </li>
          </ul>
        </template>
      </Dropdown>
    </li>
    <li class="hidden lg:block">
      <Button
        class="ml-4 btn btn-secondary" :text="$t('nav.upload')"
        @click="$router.push({ name: 'uploads' })"
      />
    </li>
  </template>
  <SiteActionsMobile v-else :menus="dropdownMenu" />
</template>
