<script setup lang="ts">
import { useUser } from '@/composables'

const {
  user,
  updateGeneral,
} = useUser()

const forms = computed(() => [
  {
    key: 'username',
    label: '用户名',
  },
  {
    key: 'email',
    label: '邮箱',
  },
])

const form = reactive({
  username: user.value.username,
  email: user.value.email,
})
</script>

<template>
  <div>
    <SlimeForm
      v-model:forms="forms"
      :_form="form"
      @submit="updateGeneral(form)"
    />
  </div>
</template>
