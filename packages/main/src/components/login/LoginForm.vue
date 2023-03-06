<script setup lang="ts">
import { Icon } from '@iconify/vue'
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
      placeholder: 'Name',
    },
    {
      key: 'email',
      label: 'Email',
      placeholder: 'Email',
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
      <Input v-model:value="form[f.key]" :label="f.label" class="w-72" :placeholder="f.placeholder" />
    </div>
    <Button
      class="btn btn-primary rounded-sm text-base w-72 mt-4"
      type="submit"
      text="创建"
    />
  </form>
  <div class="mt-4 mb-6 dark:text-gray-400">
    <p class="text-sm text-center">
      其他登录方式
    </p>
    <div class="flex justify-between w-72">
      <Button
        class="btn btn-active btn-ghost btn-sm font-medium text-xs rounded-sm w-2/5"
        text="Facebook"
      >
        <template #frontIcon>
          <Icon icon="logos:facebook" class="w-5 h-5" />
        </template>
      </Button>
      <Button
        class="btn btn-active btn-ghost btn-sm font-medium text-xs rounded-sm w-2/5"
        text="Google"
      >
        <template #frontIcon>
          <Icon icon="logos:google-icon" class="w-5 h-5" />
        </template>
      </Button>
    </div>
  </div>
</template>
