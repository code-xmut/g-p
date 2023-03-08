<script setup lang="ts">
interface ShotProps {
  title: string
}

withDefaults(defineProps<ShotProps>(), {
  title: 'Rich4st Shot',
})
</script>

<template>
  <div
    class="absolute w-full left-0 bottom-0 text-white hidden py-4 bg-gradient-to-t from-black to-transparent
        font-semibold px-4 group-hover:flex justify-between items-center"
  >
    <span>
      {{ title }}
    </span>
    <div class="flex space-x-2">
      <Action class="w-8 h-8 text-gray-300" icon="material-symbols:create-new-folder" />
      <Action class="w-8 h-8 text-gray-300" />
    </div>
  </div>
</template>
