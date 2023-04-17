<script setup lang="ts">
import { useForm } from 'slimeform'
import type { Forms } from '@/types'

interface Props {
  _form: any
  forms: Forms[]
}

const props = defineProps<Props>()
const emit = defineEmits(['update:_form', 'submit'])

const { form, submitter } = useForm({
  form: () => props._form,
})

const { submit } = submitter(() => {
  emit('submit')
})
</script>

<template>
  <form @submit.prevent="submit">
    <template v-for="f in forms" :key="f.key">
      <Input v-if="!f.textarea" v-model:value="form[f.key]" :label="f.label" :required="f.required" class="w-full" />
      <TextArea v-else v-model:value="form[f.key]" :label="f.label" />
    </template>
    <div class="flex justify-end mt-8">
      <Button text="保存更改" type="submit" class="w-full md:w-fit" />
    </div>
  </form>
</template>
