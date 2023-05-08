<script setup lang="ts">
import { useEditorStore } from '@/store'

const store = useEditorStore()

const disabled = computed(() => store.draft.length === 1)
const isEditor = computed(() => window.location.href.includes('editor'))
</script>

<template>
  <div class="flex justify-between items-center p-2 lg:p-6">
    <Button
      class="btn-outline btn-secondary" :text="$t('editor.cancel')"
      @click="isEditor ? (store.showCancelModal = true) : $router.back()"
    />
    <div class="space-x-4">
      <Button :disabled="disabled" class="btn-ghost" :text="$t('editor.save_draft')" @click="store.saveDraft()" />
      <Button :disabled="disabled" class="btn-secondary" :text="$t('editor.continue')" @click="store.showContinueModal = true" />
    </div>
  </div>
  <Modal
    :show="store.showCancelModal"
    :title="$t('editor.leave')"
    :content="$t('editor.leave_tips')"
  >
    <template #action>
      <Button :text="$t('editor.cancel')" class="btn-ghost" @click="store.showCancelModal = false" />
      <Button :text="$t('editor.dont_save')" class="btn-error" @click="store.leaveEditor(false)" />
      <Button :text="$t('editor.confirm')" class="btn-primary" @click="store.leaveEditor()" />
    </template>
  </Modal>
  <ContinueModal />
</template>
