<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useEditorStore } from '@/store'

const store = useEditorStore()
const router = useRouter()

const disabled = computed(() => store.draft.length === 1)
const isEditor = computed(() => window.location.href.includes('editor'))

const leaveEditor = (save = true) => {
  if (save)
    store.saveDraft()

  store.resetDraft()
  store.showCancelModal = false
  router.go(-2)
}
</script>

<template>
  <div class="flex justify-between items-center p-2 lg:p-6">
    <Button
      class="btn-outline btn-secondary" text="cancel"
      @click="isEditor ? (store.showCancelModal = true) : $router.back()"
    />
    <div class="space-x-4">
      <Button :disabled="disabled" class="btn-ghost" text="Save as draft" @click="store.saveDraft()" />
      <Button :disabled="disabled" class="btn-secondary" text="Continue" />
    </div>
  </div>
  <Modal
    :show="store.showCancelModal"
    title="退出并将当前内容保存为草稿？"
    content="你可以在草稿箱中找到它。"
    @close="store.showCancelModal = false"
  >
    <template #action>
      <Button text="cancel" @click="store.showCancelModal = false" />
      <Button text="Don't save" @click="leaveEditor(false)" />
      <Button text="confirm" @click="leaveEditor" />
    </template>
  </Modal>
</template>
