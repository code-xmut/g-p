<script setup lang="ts">
import { useForm } from 'slimeform'
import { useCollectionStore } from '@/store'

interface SubmitForm {
  title: string
  description: string

  [key: string]: any
}

const store = useCollectionStore()

const { form, submitter } = useForm({
  form: () => ({
    title: store.collection?.title,
    description: store.collection?.description,
  } as SubmitForm),
})

const { submit } = submitter(async ({ form }) => {
  Object.keys(form).forEach((key) => {
    if (!form[key])
      delete form[key]
  })
  store.updateCollectionById(form)
})
</script>

<template>
  <Modal
    :show="store.showEditCollectionModal"
    no-actions
    class="lg:w-2/5 px-20 py-10"
  >
    <template #title>
      <h1 class="text-xl lg:text-4xl font-bold mb-5">
        Edit Collection
      </h1>
    </template>
    <template #content>
      <form @submit.prevent="submit">
        <div class="flex flex-col">
          <label for="title" class="text-sm font-bold">Collection name</label>
          <Input v-model:value="form.title" />
        </div>
        <div class="flex flex-col mt-4">
          <label for="description" class="text-sm font-bold">Description(optional)</label>
          <textarea
            v-model="form.description"
            class="textarea textarea-bordered"
            placeholder="Collection Description"
          />
        </div>
        <div class="mt-5 text-right space-x-4">
          <Button class="btn-ghost" text="cancel" @click="store.showEditCollectionModal = false" />
          <Button class="btn-primary" text="submit" type="submit" />
        </div>
      </form>
    </template>
  </Modal>
</template>
