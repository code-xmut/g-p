<script setup lang="ts">
import { useEditorStore } from '@/store'

const store = useEditorStore()

const content = computed(() => {
  return store.draft.join('')
})
</script>

<template>
  <div class="ml-[15vw]" :class="{ 'ml-[3vw]': store.showDrawer }">
    <textarea class="w-full outline-none resize-none text-3xl font-bold" placeholder="Give me a name" />
    <Markdown :content="content" />
  </div>
  <Divider line-height="4px">
    <Button
      v-tip="{ content: 'Add more details, images or text', placement: 'top' }"
      class="btn-secondary rounded-full font-normal"
      text="insert" @click="store.toggleDrawer"
    >
      <template #frontIcon>
        <Icon />
      </template>
    </Button>
  </Divider>
</template>
