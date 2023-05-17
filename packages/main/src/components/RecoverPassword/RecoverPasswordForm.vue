<script setup lang="ts">
import { useForm } from 'slimeform'
import { mailApi, userApi } from '@/api';
import { useRouter } from 'vue-router';

interface RecoverPasswordForm {
  email: string
  newPassword: string
  confirmPassword: string
  [key: string]: string
}

const forms = computed(() => {
  return [
    {
      key: 'newPassword',
      label: '新密码',
      type: 'password',
    },
    {
      key: 'confirmPassword',
      label: '确认密码',
      type: 'password',
    },
  ]
})
const codeBtnText = ref('获取验证码')
const codeBtnClass = ref('btn-ghost ml-2')
const router = useRouter()

const { form, submitter } = useForm<RecoverPasswordForm>({
  form: () => ({
    email: '',
    newPassword: '',
    confirmPassword: '',
    code: '',
  }),
})

const { submit } = submitter(async ({ form }) => {
  if (form.newPassword !== form.confirmPassword) {
    alert('两次密码不一致')
    return
  }
  const { data } = await mailApi.verifyCode({ email: form.email, code: form.code })
  if (data) {
    const { data } = await userApi.recoverPassword(form.email, form.newPassword)
    if (data) {
      alert('修改成功')
      router.push({ name: 'auth', query: { pattern: 'login' } })
    }
  } else {
    alert('验证码错误')
  }
})

const sendEmailCode = async () => {
  const { data } = await mailApi.sendEmail(form.email);
  if (data) {
    codeBtnText.value = '60s后重试'
    codeBtnClass.value = 'ml-2 btn-disabled'
    setTimeout(() => {
      codeBtnText.value = '获取验证码'
      codeBtnClass.value = 'btn-ghost ml-2'
    }, 60000)
  }
}
</script>

<template>
  <form @submit.prevent="submit">
    <div v-for="f in forms" :key="f.key">
      <Input v-model:value="form[f.key]" :label="f.label" :type="f.type" class="w-80" />
    </div>
    <div class="flex items-end">
      <Input v-model:value="form.email" label="邮箱" />
      <Button @click="sendEmailCode" :class="codeBtnClass" :text="codeBtnText" type="button" />
    </div>
    <Input v-model:value="form.code" label="验证码" class="w-80" />
    <Button class="btn btn-primary rounded-sm text-base w-72 mt-4" type="submit" :text="$t('recover.recover_btn')" />
  </form>
</template>
