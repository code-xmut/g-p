<script setup lang="ts">

</script>

<template>
  <div class="flex justify-between items-center p-2 lg:p-6">
    <Button class="btn-outline btn-secondary" text="cancel" @click="$router.back()" />
    <div class="space-x-4">
      <Button class="btn-ghost" text="Save as draft" />
      <Button class="btn-secondary" text="Continue" />
    </div>
  </div>
</template>
