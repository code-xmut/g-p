<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useIsMobile } from '@/composables'

const route = useRoute()
const { isMobile } = useIsMobile()

interface IMenu {
  name: string
  value: string
}

const router = useRouter()
const activeMenu = ref()
const menus = reactive<IMenu[]>([
  {
    name: '概况',
    value: '/account',
  },
  {
    name: '编辑个人资料',
    value: '/account/profile',
  },
  {
    name: '安全',
    value: '/account/security',
  },
  // {
  //   name: '通知',
  //   value: '/account/notifications',
  // },
  {
    name: '删除账户',
    value: '/account/destory',
  },
])

const highlightMenu = (value: string) => {
  activeMenu.value = value
}

onMounted(() => highlightMenu(route.path))

const switchTab = (_title: string, _value: string, v: string) => {
  router.push(v)
}
</script>

<template>
  <div v-if="!isMobile">
    <ul
      v-for="m in menus"
      :key="m.name"
      class="mb-4 w-52"
    >
      <li>
        <RouterLink
          :to="m.value"
          :class="{ 'font-semibold': m.value === activeMenu, 'dark:text-secondary': m.value === activeMenu }"
          @click="highlightMenu(m.value)"
        >
          {{ m.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
  <Select
    v-else
    :content="menus"
    placeholder="请选择"
    @change="switchTab"
  />
</template>
