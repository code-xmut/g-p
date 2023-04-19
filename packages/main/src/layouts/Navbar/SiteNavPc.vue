<script setup lang="ts">
interface Props {
  navs: Array<any>
}

defineProps<Props>()
</script>

<template>
  <div class="flex justify-center items-center">
    <ul class="space-x-6 ml-6 text-sm hidden md:flex md:items-center">
      <li>
        <RouterLink to="/">
          <img src="@/assets/images/image2.jpg" class="w-12 h-12 rounded-full" alt="">
        </RouterLink>
      </li>
      <li
        v-for="n in navs"
        :key="n.name" class="flex"
      >
        <Dropdown v-if="n.children">
          <Link class="no-underline" :text="n.name" />
          <template #content>
            <ul class="flex flex-col space-y-2">
              <li
                v-for="c in n.children"
                :key="c.name"
              >
                <RouterLink :to="c.link">
                  {{ c.name }}
                </RouterLink>
              </li>
            </ul>
          </template>
        </Dropdown>
      </li>
    </ul>
  </div>
</template>
