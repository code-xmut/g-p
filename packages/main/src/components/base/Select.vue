<script setup lang="ts">
interface OptionsProps {
  content?: { name: string }[]
}

defineProps<OptionsProps>()
</script>

<template>
  <select class="select select-primary w-full max-w-xs">
    <option disabled selected>
      What is the best TV show?
    </option>
    <template v-for="o in content" :key="o.name">
      <option>{{ o.name }}</option>
    </template>
  </select>
</template>
