<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { ref, watchEffect } from 'vue'

const title = ref('Hello World')

watchEffect(() => {
  useTitle(title.value)
})

const changeTitle = () => {
  title.value = title.value === 'Hello Vue 3' ? 'Hello World' : 'Hello Vue 3'
}
</script>

<template>
  <h1 class=" text-9xl text-sky-400">
    hello world
  </h1>
  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="changeTitle">
    Change Title
  </button>
</template>
