<script setup lang="ts">
import { useEditorStore } from '@/store'

const store = useEditorStore()

const disabled = computed(() => store.draft.length === 1)
</script>

<template>
  <div class="flex justify-between items-center p-2 lg:p-6">
    <Button class="btn-outline btn-secondary" text="cancel" @click="$router.back()" />
    <div class="space-x-4">
      <Button :disabled="disabled" class="btn-ghost" text="Save as draft" @click="store.saveDraft()" />
      <Button :disabled="disabled" class="btn-secondary" text="Continue" />
    </div>
  </div>
</template>
