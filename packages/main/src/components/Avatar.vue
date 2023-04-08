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
  src: '@/assets/images/image2.jpg',
})
</script>

<template>
  <div class="flex items-center">
    <div class="avatar online">
      <div
        :class="[sizeClass]"
        class="rounded-full avatar-image"
      >
        <img :src="src">
      </div>
    </div>
    <slot v-if="$slots.default" />
    <p v-else-if="showStatus" class="ml-2 text-sm font-semibold text-gray-900 dark:text-gray-500">
      {{ userName }}
    </p>
  </div>
</template>
