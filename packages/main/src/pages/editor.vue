<script setup lang="ts">
import { useEditorStore } from '@/store'

const store = useEditorStore()
</script>

<template>
  <div class="ml-[15vw]" :class="{ 'ml-[3vw]': store.showDrawer }">
    <div v-for="b in store.draft" :key="b.id">
      <Block :block="b" />
    </div>
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
