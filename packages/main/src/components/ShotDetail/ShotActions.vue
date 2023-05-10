<script setup lang="ts">
interface Props {
  show: boolean
  detail: boolean
}

withDefaults(defineProps<Props>(), {
  show: false,
  detail: false
})

const emit = defineEmits(['update:show', 'update:detail'])

const actions = reactive([
  {
    name: 'share',
    icon: 'mdi-share',
  },
  {
    name: 'comment',
    icon: 'mdi-comment',
    cb: () => emit('update:show', true),
  },
  {
    name: 'info',
    icon: 'mdi-information',
    cb: () => emit('update:detail', true),
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
      @click="a.cb && a.cb()"
    >
      <Icon :icon="a.icon" />
    </li>
  </ul>
</template>
