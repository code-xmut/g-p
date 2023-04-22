<script setup lang="ts">
interface Props {
  tags: string[]
  q: string
}
defineProps<Props>()
defineEmits(['update:q', 'choose'])
</script>

<template>
  <ul>
    <li v-for="t in tags" :key="t" @click="$emit('choose', t)">
      {{ t }}
    </li>
  </ul>
</template>
