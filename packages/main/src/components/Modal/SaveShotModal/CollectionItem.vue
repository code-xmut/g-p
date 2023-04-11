<script setup lang="ts">
import type { Collection } from '@gp/types'

interface Props {
  collection: Collection
  existed?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['save', 'remove'])
const item = ref<HTMLElement>()
const showMinus = ref(false)
const checkedFlag = ref(false)

const removeFromCollection = () => {
  item.value?.classList.remove('bg-primary')
  showMinus.value = false
  emit('remove', props.collection._id)
  checkedFlag.value = false
}
const addToCollection = () => {
  if (checkedFlag.value || props.existed) {
    removeFromCollection()
  }
  else {
    item.value?.classList.add('bg-primary')
    showMinus.value = true
    emit('save', props.collection._id)
    checkedFlag.value = true
  }
}
</script>

<template>
  <div
    ref="item"
    class="flex h-20 md:h-24 mt-2 p-2 rounded-md cursor-pointer shadow-[0px_0px_0px_1px_#e7e7e9_inset] relative"
    :class="{ 'bg-primary': existed }"
    @click="addToCollection"
  >
    <img src="@/assets/images/image2.jpg" alt="">
    <div class="ml-4 text-sm">
      <p class="font-semibold md:text-lg">
        {{ collection.title }}
      </p>
      <p>
        {{ collection.shots?.length }} shots
      </p>
      <p>
        update at
        <span v-time="collection.updatedAt" />
      </p>
    </div>
    <Icon
      v-if="showMinus"
      class="w-8 h-8 bg-gray-700 opacity-50 rounded-lg absolute top-1/2 right-4 -translate-y-1/2"
      icon="ic:round-minus"
      @click.stop="removeFromCollection"
    />
  </div>
</template>
