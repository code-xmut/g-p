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
      i18nKey: 'recover.old_password',
    },
    {
      key: 'newPassword',
      label: 'New Password',
      i18nKey: 'recover.new_password',
    },
    {
      key: 'confirmPassword',
      label: 'Confirm Password',
      i18nKey: 'recover.confirm_password',
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
      <Input v-model:value="form[f.key]" :label="$t(f.i18nKey)" :placeholder="$t(f.i18nKey)" class="w-72" />
    </div>
    <Button
      class="btn btn-primary rounded-sm text-base w-72 mt-4"
      type="submit"
      :text="$t('recover.recover_btn')"
    />
  </form>
</template>
