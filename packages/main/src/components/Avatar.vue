<script setup lang="ts">
interface AvatarProps {
  showStatus?: boolean
  sizeClass?: string
}

withDefaults(defineProps<AvatarProps>(), {
  showStatus: true,
  sizeClass: 'w-6 h-6',
})
</script>

<template>
  <div class="flex items-center">
    <div class="avatar online">
      <div
        :class="[sizeClass]"
        class="rounded-full avatar-image"
      >
        <img src="@/assets/images/image2.jpg">
      </div>
    </div>
    <p v-if="showStatus" class="ml-2 text-sm font-semibold">
      John Doe
    </p>
  </div>
</template>
