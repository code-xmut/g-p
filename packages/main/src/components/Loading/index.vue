<script setup lang="ts">
interface Props {
  showLoadingStatus: boolean
}

withDefaults(
  defineProps<Props>(),
  {
    showLoadingStatus: true,
  },
)

const emit = defineEmits(['update:showLoadingStatus'])

const toggleLoadingStatus = () => {
  emit('update:showLoadingStatus', false)
}
</script>

<template>
  <Button
    v-if="showLoadingStatus" text="loading more"
    class="btn-ghost btn-active" @click="toggleLoadingStatus"
  />
  <h1 v-else class="font-bold">
    Loading...
  </h1>
</template>
