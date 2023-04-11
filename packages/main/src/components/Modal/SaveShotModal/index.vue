<script setup lang="ts">
import { useForm } from 'slimeform'
import type { Collection, createCollectionDto } from '@gp/types'
import { useCollections, useUser } from '@/composables'

interface Props {
  show: boolean
  shotId?: string
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
})
defineEmits(['update:show'])

const {
  getCollections,
  isCollectionEmpty,
  saveShotToCollection,
  removeShotFromCollection,
  createCollection,
  setEmptyCollection,
  shotExistCollections,
} = useCollections()
const { userId } = useUser()

const collectionForm = reactive<createCollectionDto>({
  userId,
  title: '',
  description: '',
})
const collections = ref<Collection[]>([])
const createNewCollection = ref(false)

const { form, submitter } = useForm({
  form: () => ({
    userId: collectionForm.userId,
    title: collectionForm.title,
    description: collectionForm.description,
  } as createCollectionDto & { [key: string]: any }),
})

const { submit } = submitter(async ({ form }) => {
  Object.keys(form).forEach((key) => {
    if (!form[key])
      delete form[key]
  })
  const response = await createCollection(form)
  if (response) {
    form.title = ''
    form.description = ''
    collections.value = await getCollections()
    setEmptyCollection(false)
    createNewCollection.value = false
  }
})

const showCreateForm = computed(() => {
  if (isCollectionEmpty.value)
    return true

  return createNewCollection.value
})

const modalTitle = computed(() => {
  if (isCollectionEmpty.value)
    return 'Create new collection'
  return 'Add to a collection'
})

const loadData = async () => {
  collections.value = await getCollections()
  const existedCollection = await shotExistCollections(props.shotId)

  if (existedCollection && existedCollection.length > 0) {
    collections.value = collections.value.filter((c) => {
      if (existedCollection.includes(c._id))
        c.existed = true
      return c
    })
  }
}

watchEffect(() => {
  if (props.show)
    loadData()
})

watchEffect(() => {
  if (!props.show) {
    createNewCollection.value = false
    collectionForm.title = ''
    collectionForm.description = ''
  }
})

const saveShot = async (collectionId: string) => {
  const response = await saveShotToCollection(collectionId, props.shotId)
}

const removeShot = async (collectionId: string) => {
  await removeShotFromCollection(collectionId, props.shotId)
}
</script>

<template>
  <Modal
    :show="show" no-actions class="lg:max-w-[45%]"
    @close="$emit('update:show', false)"
  >
    <template #title>
      <h1 class="text-lg lg:text-2xl font-bold mb-5">
        {{ modalTitle }}
      </h1>
    </template>
    <template #content>
      <form v-if="showCreateForm" @submit.prevent="submit">
        <div class="flex flex-col">
          <label for="title" class="text-sm font-bold">Collection name</label>
          <Input v-model:value="form.title" class="w-full" />
        </div>
        <div class="flex flex-col mt-4">
          <label for="description" class="text-sm font-bold">Description(optional)</label>
          <textarea
            v-model="form.description"
            class="textarea textarea-bordered h-20"
            placeholder="Collection Description"
          />
        </div>
        <div class="mt-5 text-right space-x-4">
          <Button class="btn-ghost" text="cancel" @click="$emit('update:show', false)" />
          <Button class="btn-primary" text="Create" type="submit" />
        </div>
      </form>
      <div v-else>
        <div class="max-h-[40vh] overflow-y-scroll pr-3">
          <template v-for="c in collections" :key="c._id">
            <CollectionItem :existed="c.existed" :collection="c" @save="saveShot" @remove="removeShot" />
          </template>
        </div>
        <div class="mt-5 flex justify-between">
          <Button class="btn-secondary" text="Done" @click="$emit('update:show', false)" />
          <Button class="btn-outline" text="Create new" @click="createNewCollection = true" />
        </div>
      </div>
    </template>
  </Modal>
</template>
