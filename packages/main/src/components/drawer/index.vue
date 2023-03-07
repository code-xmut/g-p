<script setup lang="ts">
withDefaults(defineProps<{
  show: boolean
}>(), {
  show: false,
})

const drawerMenus = computed(() => {
  return [
    {
      name: 'Home',
      children: [
        {
          name: 'Home 1',
        },
        {
          name: 'Home 2',
        },
        {
          name: 'Home 3',
        },
        {
          name: 'Home 4',
        },
        {
          name: 'Home 5',
        },
        {
          name: 'Home 6',
        },
        {
          name: 'Home 7',
        },
        {
          name: 'Home 8',
        },
        {
          name: 'Home 9',
        },
        {
          name: 'Home 10',
        },
      ],
    },
    {
      name: 'About',
      children: [
        {
          name: 'About 1',
        },
        {
          name: 'About 2',
        },
      ],
    },
    {
      name: 'Contact',
      children: [
        {
          name: 'Contact 1',
        },
        {
          name: 'Contact 2',
        },
        {
          name: 'Contact 3',
        },
      ],
    },
  ]
})
</script>

<template>
  <div
    v-if="show"
    style="height: calc(100vh - 68px);"
    class="w-full overflow-y-scroll absolute bottom-0 left-0 p-4"
  >
    <Input class="w-full" show-icon />
    <template v-for="d in drawerMenus" :key="d.name">
      <Collapse :title="d.name" :content="d.children" />
    </template>
  </div>
</template>
