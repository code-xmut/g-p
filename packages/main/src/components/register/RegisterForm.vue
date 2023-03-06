<script setup lang="ts">
import type { CreateUserDto } from '@gp/types'
import { useForm } from 'slimeform'
import { useRequest } from '@/composables'

const { post } = useRequest()

const createUserDto = reactive<CreateUserDto>({
  name: '',
  email: '',
  password: '',
})

const forms = computed(() => {
  return [
    {
      key: 'name',
      label: 'Name',
      i18nKey: 'auth.username',
    },
    {
      key: 'email',
      label: 'Email',
      i18nKey: 'auth.email',
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
    name: createUserDto.name,
    email: createUserDto.email,
    password: createUserDto.password,
  } as CreateUserDto),
})

const { submit } = submitter(async ({ form }) => {
  const { data } = await post('/users/register', form)
})
</script>

<template>
  <form @submit.prevent="submit">
    <div v-for="f in forms" :key="f.label" class="mb-1">
      <Input v-model:value="form[f.key]" :label="$t(f.i18nKey)" class="w-72" :placeholder="$t(f.i18nKey)" />
    </div>
    <Button
      class="btn btn-primary rounded-sm text-base w-72 mt-4"
      type="submit"
      :text="$t('register.register_btn')"
    />
  </form>
  <OtherLoginWays />
</template>
