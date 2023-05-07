<script setup lang="ts">
import { useEditorStore } from '@/store';
import { useRoute } from 'vue-router';

const store = useEditorStore();
const route = useRoute()
const showChooseDraftType = ref(route.path === '/uploads');

const draftTypeOptions = computed(() => [
  {
    name: '组件',
    value: 'component',
  },
  {
    name: '博客',
    value: 'blog',
  }
])

const onSelectType = (_title: string, v: string) => {
  store.draftType = v;
}
</script>

<template>
  <div class="flex justify-between bg-white dark:bg-darkBg">
    <div class="w-full">
      <Buttons />
      <RouterView />
      <Modal title="选择你要发布的作品类型" @confirm="showChooseDraftType = false" v-model:show="showChooseDraftType"
        @close="showChooseDraftType = false" class="md:w-[30%]">
        <template #content>
          <Select class="mt-4" :content="draftTypeOptions" @change="onSelectType" />
        </template>
      </Modal>
    </div>
    <PcDrawer />
  </div>
</template>
