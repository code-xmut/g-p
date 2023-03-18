<script setup lang="ts">

</script>

<template>
  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6">
    <li>
      <Collections @click="$router.push('collections')" />
    </li>
  </ul>
</template>
