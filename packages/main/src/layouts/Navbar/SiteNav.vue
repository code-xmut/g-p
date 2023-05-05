<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useRoute } from 'vue-router'
import SiteNavPc from './SiteNavPc.vue'
import SiteActionsLogged from './SiteActionsLogged.vue'
import { useIsMobile } from '@/composables'

const route = useRoute()
const { isMobile } = useIsMobile()
const q = ref('')
const navs = computed(() => {
  return [
    {
      name: '灵感',
      children: [
        {
          name: '博客',
          link: '/blog',
        },
      ],
    },
    {
      name: '关于',
      children: [
        {
          name: '脚手架教程',
          link: '/cli',
        },
      ],
    },
    {
      name: 'Contact',
      children: [
        {
          name: 'Contact',
          link: '/contact',
        },
      ],
    },
    {
      name: '上传我的组件',
      link: '/uploads',
    },
  ]
})

const pcSiteNavs = computed(() => {
  return navs.value.filter(n => n.children)
})

const showDrawer = ref(false)
const navIcon = computed(() => showDrawer.value ? 'mdi:close' : 'mdi:menu')

watchEffect(() => {
  if (!isMobile.value)
    showDrawer.value = false
})

watchEffect(() => {
  if (route.path)
    showDrawer.value = false
})
</script>

<template>
  <div v-if="isMobile" class="text-lg font-semibold text-gray-600">
    <Icon class="w-6 h-6 cursor-pointer lg:hidden" :icon="navIcon" @click="showDrawer = !showDrawer" />
    <FullScreenDrawer :show="showDrawer" class="z-[60]">
      <Input v-model:value="q" class="w-full" show-icon @keydown.enter="$router.push(`/search/${q}`)" />
      <div v-for="d in navs" :key="d.name">
        <Collapse v-if="d.children" link :title="d.name" :content="d.children" />
        <RouterLink v-else :to="d.link" class="block pt-2 border-b pb-6">
          {{ d.name }}
        </RouterLink>
      </div>
      <div class="mt-6">
        <SiteActionsLogged />
      </div>
    </FullScreenDrawer>
  </div>
  <SiteNavPc v-else :navs="pcSiteNavs" />
  <template v-if="isMobile">
    <div>
      <RouterLink to="/">
        <img src="@/assets/images/logo.jpg" class="w-12 h-12 rounded-full" alt="">
      </RouterLink>
    </div>
    <DarkMode />
  </template>
</template>
