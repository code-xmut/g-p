<script setup lang="ts">
import { useEditorStore } from '@/store'

const store = useEditorStore()

const disabled = computed(() => store.draft.length === 1)
const isEditor = computed(() => window.location.href.includes('editor'))
</script>

<template>
  <div class="flex justify-between items-center p-2 lg:p-6">
    <Button
      class="btn-outline btn-secondary" text="cancel"
      @click="isEditor ? (store.showCancelModal = true) : $router.back()"
    />
    <div class="space-x-4">
      <Button :disabled="disabled" class="btn-ghost" text="Save as draft" @click="store.saveDraft()" />
      <Button :disabled="disabled" class="btn-secondary" text="Continue" @click="store.showContinueModal = true" />
    </div>
  </div>
  <Modal
    :show="store.showCancelModal"
    title="退出并将当前内容保存为草稿？"
    content="你可以在草稿箱中找到它。"
  >
    <template #action>
      <Button text="cancel" class="btn-ghost" @click="store.showCancelModal = false" />
      <Button text="Don't save" class="btn-error" @click="store.leaveEditor(false)" />
      <Button text="confirm" class="btn-primary" @click="store.leaveEditor()" />
    </template>
  </Modal>
  <ContinueModal />
</template>
