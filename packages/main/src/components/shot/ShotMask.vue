<script setup lang="ts">
interface ShotProps {
  title?: string
}

withDefaults(defineProps<ShotProps>(), {
  title: 'Rich4st Shot Rich4st Shot Rich4st Shot Rich4st Shot Rich4st Shot',
})

// tailwindcss 设置文字最多两行，超出显示省略号
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
        v-tip="{ content: 'Save shot', placement: 'bottom' }"
        class="w-8 h-8 text-gray-300" icon="material-symbols:create-new-folder"
      />
      <Action
        v-tip="{ content: 'Like this shot', placement: 'bottom' }"
        class="w-8 h-8 text-gray-300"
      />
    </div>
  </div>
</template>
