<script setup lang="ts">
const forms = computed(() => {
  return [
    {
      label: 'Name',
      placeholder: 'Name',
      value: '',
    },
    {
      label: 'Email',
      placeholder: 'Email',
      value: '',
    },
    {
      label: 'Password',
      placeholder: 'Password',
      value: '',
    },
  ]
})
</script>

<template>
  <div v-for="f in forms" :key="f.label" class="mb-1">
    <Input :label="f.label" class="w-72" :placeholder="f.placeholder" />
  </div>
</template>
