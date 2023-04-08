<script setup lang="ts">
const actions = reactive([
  {
    name: 'share',
    icon: 'mdi-share',
  },
  {
    name: 'comment',
    icon: 'mdi-comment',
  },
  {
    name: 'info',
    icon: 'mdi-information',
  },
])
</script>

<template>
  <ul
    class="flex space-x-2 md:space-x-0 md:space-y-4 md:block md:pt-20"
    v-bind="$attrs"
  >
    <li
      v-for="a in actions" :key="a.name"
      class="shadow-[0px_0px_0px_1px_#e7e7e9_inset] rounded-lg px-3 py-2.5 cursor-pointer"
    >
      <Icon :icon="a.icon" />
    </li>
  </ul>
</template>
