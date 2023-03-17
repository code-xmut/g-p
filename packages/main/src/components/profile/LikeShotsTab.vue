<script setup lang="ts">

</script>

<template>
  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
    <li v-for="i in 5" :key="i">
      <Shot />
    </li>
  </ul>
</template>
