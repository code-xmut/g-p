<script setup lang="ts">
import { useUser } from '@/composables'

const {
  updatePassword,
} = useUser()

const form = reactive({
  oldPassword: '',
  newPassword: '',
})
const forms = computed(() => [
  {
    key: 'oldPassword',
    label: '旧密码',
    type: 'password',
  },
  {
    key: 'newPassword',
    label: '新密码',
    type: 'password',
  },
])
</script>

<template>
  <SlimeForm
    v-model:_form="form"
    :forms="forms"
    @submit="updatePassword(form)"
  />
</template>
