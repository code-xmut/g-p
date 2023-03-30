<script setup lang="ts">
import { Icon } from '@iconify/vue'

const navs = computed(() => {
  return [
    {
      name: 'Home',
    },
    {
      name: 'About',
    },
    {
      name: 'Contact',
    },
  ]
})

const body = ref(document.body)
const showDrawer = ref(false)
const navIcon = computed(() => {
  if (showDrawer.value)
    body.value.classList.add('overflow-hidden')
  else
    body.value.classList.remove('overflow-hidden')

  return showDrawer.value ? 'mdi:close' : 'mdi:menu'
})

const resizeHandler = () => {
  if (window.innerWidth > 1024) {
    showDrawer.value = false
    body.value.classList.remove('overflow-hidden')
  }
}

window.addEventListener('resize', resizeHandler)

onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler)
})
</script>

<template>
  <Icon class="w-6 h-6 cursor-pointer lg:hidden" :icon="navIcon" @click="showDrawer = !showDrawer" />
  <Drawer :show="showDrawer" />
  <div class="flex justify-center items-center">
    <a href="#">
      <RouterLink to="/">
        <img src="@/assets/images/image2.jpg" class="w-12 h-12 rounded-full" alt="">
      </RouterLink>
    </a>
    <ul class="space-x-6 ml-6 text-sm hidden lg:flex">
      <li
        v-for="n in navs"
        :key="n.name" class="flex"
      >
        <Dropdown>
          <Link class="no-underline" :text="n.name" />
        </Dropdown>
      </li>
      <li>
        <DarkMode />
      </li>
    </ul>
  </div>
</template>
