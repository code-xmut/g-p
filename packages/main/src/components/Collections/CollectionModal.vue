<script setup lang="ts">
import { Collection } from '@gp/types';
import { useForm } from 'slimeform';

interface Props {
  show: boolean
  collection: Collection
}

const props = defineProps<Props>()
defineEmits(['update:show', 'submit'])

const { form } = useForm({
  form: () => ({
      title: props.collection?.title,
      description: props.collection?.description
  })
});
</script>

<template>
  <Modal
    :show="show"
    class="lg:w-2/5 px-20 py-10"
    @close="$emit('update:show', false)"
    @confirm="$emit('submit', form)"
  >
    <template #title>
      <h1 class="text-xl lg:text-4xl font-bold mb-5">
        编辑收藏夹
      </h1>
    </template>
    <template #content>
      <form>
        <Input v-model:value="form.title" label="标题" class="w-full" />
        <TextArea v-model:value="form.description" label="描述" />
      </form>
    </template>
  </Modal>
</template>
