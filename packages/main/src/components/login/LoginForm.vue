<script setup lang="ts">
import { useForm } from 'slimeform'
import type { LoginUserDto } from '@gp/types'
import { useRequest } from '@/composables'

const { post } = useRequest()

const loginForm = reactive<LoginUserDto>({
  username: '',
  password: '',
})

const forms = computed(() => {
  return [
    {
      key: 'username',
      label: 'Name',
      placeholder: 'Name',
    },
    {
      key: 'password',
      label: 'Password',
      placeholder: 'Password',
    },
  ]
})

const { form, submitter } = useForm({
  form: () => ({
    username: loginForm.username,
    password: loginForm.password,
  } as LoginUserDto),
})

const { submit } = submitter(async ({ form }) => {
  const { data } = await post('/login', form)
})
</script>

<template>
  <form @submit.prevent="submit">
    <div v-for="f in forms" :key="f.label" class="mb-1">
      <Input v-model:value="form[f.key]" :label="f.label" class="w-72" :placeholder="f.placeholder" />
    </div>
    <div class="text-center mt-3 my-2">
      <Link text="忘记密码?" />
      <span class="text-gray-400 mx-6">|</span>
      <Link text="邮箱确认" />
    </div>
    <Button
      class="btn btn-primary rounded-sm text-base w-72 mt-4"
      type="submit"
      text="Log in"
    />
  </form>
  <OtherLoginWays />
  <div>
    <p class="text-sm text-center mt-4">
      没有账号?
      <Link text="注册" @click="$router.push({ name: 'login' })" />
    </p>
  </div>
</template>
