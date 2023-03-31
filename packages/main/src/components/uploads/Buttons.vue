<script setup lang="ts">

</script>

<template>
  <div class="flex justify-between items-center">
    <Button class="btn-outline btn-secondary" text="cancel" @click="$router.back()" />
    <div class="space-x-4">
      <Button text="Save as draft" />
      <Button text="Continue" />
    </div>
  </div>
</template>
