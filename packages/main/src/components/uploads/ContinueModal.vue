<script setup lang="ts">
import { useEditorStore } from '@/store'
import { useIsMobile } from '@/composables'
import { tagApi } from '@/api'

const store = useEditorStore()
const { isMobile } = useIsMobile()

const selected = ref<string[]>([])
const options = ref<string[]>([])
const severUrl = ref('')
const description = ref('')

onMounted(async () => {
  const { data } = await tagApi.findAllTags()
  options.value = data.map(tag => tag.title)
})
</script>

<template>
  <Modal
    :full-screen="isMobile" :close-icon="isMobile" class="w-screen md:w-[70%]" :title="$t('editor.last_step')"
    :show="store.showContinueModal" @close="store.showContinueModal = false"
  >
    <template #content>
      <div class="flex flex-col md:flex-row justify-around">
        <div class="text-center w-full ml-4 md:w-[50%]">
          <h2 class="text-3xl mb-2">
            {{ store.draft[0].value }}
          </h2>
          <img width="800" height="600" :src="store.draft[1].value" alt="">
        </div>
        <div>
          <TextArea :label="$t('editor.description')" v-model:value="description" class="mb-2" />
          <Input class="mb-2" label="组件地址" v-model:value="severUrl" />
          <vue-select v-if="store.draftType === '组件'" v-model="selected" multiple :options="options" />
        </div>
      </div>
    </template>
    <template #action>
      <Button
        v-if="!isMobile"
        class="btn-ghost"
        :text="$t('editor.close')"
        @click="store.showContinueModal = false"
      />
      <Button
        :text="$t('editor.save_draft')"
        @click="store.saveDraft()"
      />
      <Button
        class="btn-primary"
        :text="$t('editor.publish')"
        @click="store.publishShot(selected, description, severUrl)"
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
