<script setup lang="ts">
import { useEditorStore } from '@/store'
import { useIsMobile } from '@/composables'
import { tagApi } from '@/api'

const store = useEditorStore()
const { isMobile } = useIsMobile()

const selected = ref<string[]>([])
const options = ref<string[]>([])
const description = ref('')

onMounted(async () => {
  const { data } = await tagApi.findAllTags()
  options.value = data.map(tag => tag.title)
})
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
          <span>description:</span>
          <Input v-model:value="description" class="mb-2" />
          <vue-select v-model="selected" multiple :options="options" />
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
        @click="store.publishShot(selected, 'now publish')"
      />
    </template>
  </Modal>
</template>

<style scoped>
::v-deep(.vs__dropdown-toggle) {
  display: flex;
  flex-direction: column;
}
</style>
