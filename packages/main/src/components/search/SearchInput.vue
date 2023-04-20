<script setup lang="ts">
interface Props {
  qType: string
}

defineProps<Props>()
defineEmits(['update:qType', 'search'])

const q = ref('')
const _qType = ref('shots')

const selectContent = computed(() => [
  {
    name: '组件',
    value: 'shots',
  },
  {
    name: '用户',
    value: 'members',
  },
])
</script>

<template>
  <div class="bg-gray-100 dark:bg-transparent absolute h-16 w-full hidden md:block" />
  <div class="mt-10 px-2 flex justify-center md:w-1/3">
    <Input v-model:value="q" show-icon class="w-full h-16" @keydown.enter="$emit('search', q, _qType)" />
    <Select
      :content="selectContent" class="relative h-16 -left-4 text-lg"
      @change="_qType = $event"
    />
  </div>
</template>
