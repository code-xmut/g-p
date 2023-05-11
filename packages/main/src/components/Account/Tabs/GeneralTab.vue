<script setup lang="ts">
import { useUser } from '@/composables'

const {
  user,
  updateGeneral,
} = useUser()

const forms = computed(() => [
  {
    key: 'name',
    label: '昵称',
  },
  {
    key: 'email',
    label: '邮箱',
  },
])

const form = reactive({
  name: user.value.name,
  email: user.value.email,
})
</script>

<template>
  <SlimeForm
    v-model:forms="forms"
    :_form="form"
    @submit="updateGeneral(form)"
  />
</template>
