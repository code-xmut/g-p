<script setup lang="ts">
import { useEditorStore } from '@/store'
import { useIsMobile } from '@/composables'

const store = useEditorStore()
const { isMobile } = useIsMobile()
</script>

<template>
  <Modal
    :full-screen="isMobile" :close-icon="isMobile" class="w-screen" title="Final Touches"
    :show="store.showContinueModal" @close="store.showContinueModal = false"
  >
    <template #content>
      <div class="flex flex-col md:flex-row justify-around">
        <div class="text-center w-full md:w-96">
          <h2 class="text-3xl mb-2">
            {{ store.draft[0].value }}
          </h2>
          <img width="800" height="600" :src="store.draft[1].value" alt="">
        </div>
        <div>
          Tags: <Select :content="[{ name: 'foo' }, { name: 'bar' }]" />
          <Input />
        </div>
      </div>
    </template>
    <template #action>
      <Button
        v-if="!isMobile"
        class="btn-ghost"
        text="close"
        @click="store.showContinueModal = false"
      />
      <Button
        text="save as draft"
        @click="store.saveDraft()"
      />
      <Button
        class="btn-primary"
        text="publish now"
      />
    </template>
  </Modal>
</template>
