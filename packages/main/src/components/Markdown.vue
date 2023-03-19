<script setup lang="ts">
import { marked } from 'marked'

const props = defineProps<{
  content: string
}>()

const md = props.content.replace(/\\n/g, '\n')
const md2html = marked(md)
</script>

<template>
  <article class="prose lg:prose-xl">
    <div v-html="md2html" />
  </article>
</template>
