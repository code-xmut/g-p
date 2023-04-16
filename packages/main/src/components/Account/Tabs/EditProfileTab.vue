<script setup lang="ts">
import type { UpdateUserProfileDto } from '@gp/types'
import { useForm } from 'slimeform'
import { useDropzone } from 'vue3-dropzone'
import { useRouter } from 'vue-router'
import { useUser } from '@/composables'

const router = useRouter()
const {
  user,
  userId,
  uploadAvatarFile,
  updateUserInfo,
  updateAvatar,
} = useUser()

const { getInputProps } = useDropzone({
  onDrop: async (acceptedFiles) => {
    const formData = new FormData()
    formData.append('file', acceptedFiles[0])
    await uploadAvatarFile(formData)
  },
})

const EditProfileForm = reactive<UpdateUserProfileDto>({
  name: user.value.name,
  bio: user.value.bio,
  location: user.value.location,
})
const uploadAvatar = ref(false)

const forms = computed(() => {
  return [
    {
      key: 'name',
      label: '昵称',
      required: true,
    },
    {
      key: 'location',
      label: '所在地',
      required: false,
    },
    {
      key: 'bio',
      label: '个人简介',
      required: false,
      textare: true,
    },
  ]
})

const { form, submitter } = useForm({
  form: () => ({
    name: EditProfileForm.name,
    bio: EditProfileForm.bio,
    location: EditProfileForm.location,
  } as UpdateUserProfileDto & { [key: string]: any }),
})

const { submit } = submitter(async ({ form }) => {
  form._id = userId
  if (await updateUserInfo(form))
    router.go(0)
})

const open = () => {
  const input = document.querySelector('input[type="file"]') as HTMLInputElement
  input.click()
}
</script>

<template>
  <div class="flex items-center space-x-4 mb-5 w-full">
    <Avatar
      size-class="w-20"
      src="https://images.pexels.com/photos/450038/pexels-photo-450038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />
    <div>
      <Button text="上传新头像" class="mr-4" :class="{ hidden: uploadAvatar }" @click="uploadAvatar = true" />
      <Button class="btn-error btn-outline" text="删除头像" />
      <div v-if="uploadAvatar">
        <div class="my-4">
          <input v-bind="getInputProps()">
          <Link class="underline underline-offset-1 text-pink-500" text="选择文件" @click="open" />
        </div>
        <Button text="现在上传" @click="updateAvatar" />
      </div>
    </div>
  </div>
  <div>
    <form @submit.prevent="submit">
      <template v-for="f in forms" :key="f.key">
        <Input v-if="!f.textare" v-model:value="form[f.key]" :label="f.label" :required="f.required" class="w-full" />
        <TextArea v-else v-model:value="form[f.key]" :label="f.label" />
      </template>
      <div class="flex justify-end mt-8">
        <Button text="保存个人信息" type="submit" />
      </div>
    </form>
  </div>
</template>
