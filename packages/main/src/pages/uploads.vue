<script setup lang="ts">
import { useEditorStore } from '@/store';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const store = useEditorStore();
const route = useRoute()
const showChooseDraftType = ref(route.path === '/uploads');
const { t } = useI18n();

const draftTypeOptions = computed(() => [
  {
    name: t('editor.component'),
    value: 'component',
  },
  {
    name: t('editor.blog'),
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
      <Modal :title="$t('editor.select_type')" @confirm="showChooseDraftType = false" v-model:show="showChooseDraftType"
        @close="showChooseDraftType = false" class="md:w-[30%]">
        <template #content>
          <Select class="mt-4" :content="draftTypeOptions" @change="onSelectType" />
        </template>
      </Modal>
    </div>
    <PcDrawer />
  </div>
</template>
