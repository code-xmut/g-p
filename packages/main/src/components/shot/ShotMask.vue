<script setup lang="ts">
interface ShotProps {
  title?: string
  collected?: boolean
  liked?: boolean
}

const props = withDefaults(defineProps<ShotProps>(), {
  title: 'Rich4st Shot Rich4st Shot Rich4st Shot Rich4st Shot Rich4st Shot',
})

defineEmits(['save', 'like'])

const collectionTipText = computed(() => {
  return props.collected ? 'Remove from collection' : 'Save shot'
})
const likeTipText = computed(() => {
  return props.liked ? 'Unlike this shot' : 'Like this shot'
})
</script>

<template>
  <div
    class="absolute w-full left-0 bottom-0 text-white hidden py-4 bg-gradient-to-t from-black to-transparent
        px-4 group-hover:flex justify-between items-center"
  >
    <span class="text-sm line-clamp-2">
      {{ title }}
    </span>
    <div class="flex space-x-2">
      <Action
        v-tip="{ content: collectionTipText, placement: 'bottom' }"
        class="w-8 h-8"
        :class="{ 'text-pink-500': collected }"
        icon="material-symbols:create-new-folder"
        @click.stop="$emit('save')"
      />
      <Action
        v-tip="{ content: likeTipText, placement: 'bottom' }"
        class="w-8 h-8"
        :class="{ 'text-pink-500': liked }"
        @click.stop="$emit('like')"
      />
    </div>
  </div>
</template>
