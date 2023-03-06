<script setup lang="ts">
import { useForm } from 'slimeform'

interface RecoverPasswordForm {
  oldPassword: string
  newPassword: string
  [key: string]: string
}

const forms = computed(() => {
  return [
    {
      key: 'oldPassword',
      label: 'Old Password',
      placeholder: 'Old Password',
    },
    {
      key: 'newPassword',
      label: 'New Password',
      placeholder: 'New Password',
    },
    {
      key: 'confirmPassword',
      label: 'Confirm Password',
      placeholder: 'Confirm Password',
    },
  ]
})

const { form, submitter } = useForm<RecoverPasswordForm>({
  form: () => ({
    oldPassword: '',
    newPassword: '',
  }),
})

const { submit } = submitter(async ({ form }) => {
})
</script>

<template>
  <form @submit.prevent="submit">
    <div v-for="f in forms" :key="f.key">
      <Input v-model:value="form[f.key]" :label="f.label" :placeholder="f.placeholder" class="w-72" />
    </div>
    <Button
      class="btn btn-primary rounded-sm text-base w-72 mt-4"
      type="submit"
      text="Recover"
    />
  </form>
</template>
