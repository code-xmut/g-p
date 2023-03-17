<script setup lang="ts">
import Tabs from './index.vue'

const tabs = reactive([
  {
    name: 'Work',
    slotName: 'Work',
  },
  {
    name: 'Boosted Shot',
    slotName: 'BoostedShot',
  },
  {
    name: 'Collections',
    slotName: 'Collections',
  },
  {
    name: 'Liked shots',
    slotName: 'LikedShots',
  },
  {
    name: 'About',
    slotName: 'About',
  },
])
</script>

<template>
  <div v-bind="$attrs">
    <Tabs :tabs="tabs" class="pt-24 pb-6 w-full border-b border-gray-400">
      <template #Work>
        <WorkTab />
      </template>
      <template #BoostedShot>
        boosted shot
      </template>
      <template #Collections>
        collections
      </template>
      <template #LikedShots>
        <LikeShotsTab />
      </template>
      <template #About>
        about
      </template>
    </Tabs>
  </div>
</template>
