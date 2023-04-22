<script setup lang="ts">
interface AvatarProps {
  showStatus?: boolean
  sizeClass?: string
  userName?: string
  src?: string
}

withDefaults(defineProps<AvatarProps>(), {
  showStatus: true,
  sizeClass: 'w-6 h-6',
  src: 'https://cdn.dribbble.com/assets/avatar-default-e370af14535cdbf137637a27ee1a8e451253edc80be429050bc29d59b1f7cda0.gif',
})
</script>

<template>
  <div class="flex items-center">
    <div class="avatar">
      <div
        :class="[sizeClass]"
        class="rounded-full avatar-image"
      >
        <img :src="src">
      </div>
    </div>
    <slot v-if="$slots.default" />
    <p v-else-if="showStatus" class="ml-4 font-semibold text-gray-900 dark:text-gray-500">
      {{ userName }}
    </p>
  </div>
</template>
