<script setup lang="ts">
import { useShotStore } from '@/store';
import { ShotDto } from '@gp/types';

const store = useShotStore();
const shot = ref<ShotDto>()

const { getShot } = store

onMounted(async () => {
  shot.value = await getShot()
})
</script>

<template>
  <Modal title="详情" class="absolute md:w-[40%]" v-model:show="store.showShotDetail" @confirm="store.showShotDetail = false" @close="store.showShotDetail = false">
    <template #content>
      <div class="pl-8 md:pl-16 pt-6">
        <p>作者: {{ shot?.user }}</p>
        <p>标题: {{ shot?.title }}</p>
        <p>描述： {{ shot?.description }}</p>
        <p>服务器地址： {{ shot?.serverUrl }}</p>
        <p>上次更新： <span v-time="shot?.updatedAt"></span></p>
      </div>
    </template>
  </Modal>
</template>
