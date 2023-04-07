<script setup lang="ts">
import type { Collection } from '@gp/types'

interface Props {
  collection: Collection
}

const props = defineProps<Props>()

const designers = computed(() => {
  // 计算collection中shots的user数量
  const designers = new Set()
  props.collection.shots?.forEach((shot) => {
    designers.add(shot.user)
  })

  return designers.size
})
</script>

<template>
  <ul class=" w-full cursor-pointer">
    <li>
      <div class="group text-center">
        <Card>
          <img class=" rounded-tl-md rounded-tr-md " src="@/assets/images/image1.jpg" alt="">
          <ul class="grid grid-cols-3 gap-1 mt-1">
            <li>
              <img class=" rounded-bl-md" src="@/assets/images/image2.jpg" alt="">
            </li>
            <li>
              <img src="@/assets/images/image2.jpg" alt="">
            </li>
            <li>
              <img class="rounded-br-md" src="@/assets/images/image2.jpg" alt="">
            </li>
          </ul>
          <Link
            :text="collection.title"
            class="text-gray-900 dark:text-gray-500 my-3 group-hover:underline"
          />
          <div class="text-sm text-gray-500">
            <span>{{ collection.shots?.length }} shots · {{ designers }} designer</span>
          </div>
        </Card>
      </div>
    </li>
  </ul>
</template>
