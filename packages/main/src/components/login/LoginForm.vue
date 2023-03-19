<script setup lang="ts">
import { useForm } from 'slimeform'
import type { LoginUserDto } from '@gp/types'
import { authApi } from '@/api'

const loginForm = reactive<LoginUserDto>({
  username: '',
  password: '',
})

const forms = computed(() => {
  return [
    {
      key: 'username',
      label: 'Name',
      i18nKey: 'auth.username',
    },
    {
      key: 'password',
      label: 'Password',
      i18nKey: 'auth.password',
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
  const { data } = await authApi.login(form)
})
</script>

<template>
  <form @submit.prevent="submit">
    <div v-for="f in forms" :key="f.label" class="mb-1">
      <Input v-model:value="form[f.key]" :label="$t(f.i18nKey)" class="w-72" :placeholder="$t(f.i18nKey)" />
    </div>
    <div class="text-center mt-3 my-2">
      <Link :text="$t('login.recover_password')" @click="$router.push({ name: 'auth', query: { pattern: 'recover' } })" />
      <span class="text-gray-400 mx-6">|</span>
      <Link :text="$t('login.confirm_email')" />
    </div>
    <Button
      class="btn btn-primary rounded-sm text-base w-72 mt-4"
      type="submit"
      :text="$t('login.login_btn')"
    />
  </form>
  <OtherLoginWays />
  <div>
    <p class="text-sm text-center mt-4">
      {{ $t('login.no_account') }}
      <Link :text="$t('login.register')" @click="$router.push({ name: 'auth' })" />
    </p>
  </div>
</template>
