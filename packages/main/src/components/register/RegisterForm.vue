<script setup lang="ts">
import type { CreateUserDto } from '@gp/types'
import { useForm } from 'slimeform'
import { authApi, userApi } from '@/api'

const createUserDto = reactive<CreateUserDto>({
  username: '',
  email: '',
  password: '',
})
const customRule = ref<string | undefined>(undefined)

const isNameAvailable = async (e: Event) => {
  const el = (e.target as HTMLInputElement)

  if (el.name === 'username') {
    const { data } = await userApi.isUserNameValid(el.value)
    if (!data) {
      el.classList.add('border-red-500')
      customRule.value = 'Username is already taken'
    }
    else {
      el.classList.remove('border-red-500')
      customRule.value = undefined
    }
  }
}

const forms = computed(() => {
  return [
    {
      key: 'username',
      label: 'userName',
      i18nKey: 'auth.username',
    },
    {
      key: 'email',
      label: 'Email',
      i18nKey: 'auth.email',
      type: 'email',
    },
    {
      key: 'password',
      label: 'Password',
      i18nKey: 'auth.password',
      type: 'password',
    },
  ]
})

const { form, submitter, status } = useForm({
  form: () => ({
    username: createUserDto.username,
    email: createUserDto.email,
    password: createUserDto.password,
  } as CreateUserDto),
  rule: {
    username: [
      val => !!val || 'Required',
      val => (val && val.length >= 4) || 'Min 4 characters',
    ],
    email: [
      val => !!val || 'Required',
      val => /.+@.+\..+/.test(val) || 'E-mail must be valid',
    ],
    password: [
      val => !!val || 'Required',
      val => val.length >= 6 || 'Min 6 characters',
    ],
  },
})

const { submit } = submitter(async ({ form }) => {
  const { data } = await authApi.register(form)
})
</script>

<template>
  <form @submit.prevent="submit">
    <div v-for="f in forms" :key="f.label" class="mb-1">
      <Input
        v-model:value="form[f.key]" :name="f.key" :label="$t(f.i18nKey)" class="w-72" :placeholder="$t(f.i18nKey)"
        :type="f.type" with-rule :rule="status[f.key].message" :error="status[f.key].isError" :custom-rule="customRule"
        @blur="isNameAvailable($event)"
      />
    </div>
    <Button class="btn btn-primary rounded-sm text-base w-72 mt-4" type="submit" :text="$t('register.register_btn')" />
  </form>
  <OtherLoginWays />
</template>
