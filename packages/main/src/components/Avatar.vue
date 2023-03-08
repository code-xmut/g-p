<script setup lang="ts">
interface AvatarProps {
  showStatus?: boolean
}

withDefaults(defineProps<AvatarProps>(), {
  showStatus: true,
})
</script>

<template>
  <div class="flex items-center">
    <div class="avatar online">
      <div class="w-6 h-6 rounded-full">
        <img src="@/assets/images/image2.jpg">
      </div>
    </div>
    <p v-if="showStatus" class="ml-2 text-sm font-semibold">
      John Doe
    </p>
  </div>
</template>
