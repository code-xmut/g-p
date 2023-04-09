<script setup lang="ts">
import type { CommentDto } from '@gp/types'
import { convertBlocks2MD } from '@/utils/convertBlocks2MD'
import { useShotStore } from '@/store'

const store = useShotStore()

const shotContent = ref('')
const comments = ref<CommentDto[]>([])

onMounted(async () => {
  const shot = await store.getShot()
  try {
    shotContent.value = convertBlocks2MD(JSON.parse(shot.content))
  }
  catch (error) {
    console.error(error)
  }

  comments.value = await store.getComments()
})
</script>

<template>
  <div class="px-2 md:flex justify-between md:pr-10 md:pl-[10vw] xl:pl-[20vw]">
    <div>
      <DetailHeader user-name="rich4st" />
      <div v-if="shotContent">
        <Markdown :content="shotContent" />
      </div>
    </div>
    <div class="hidden md:block">
      <ShotActions v-model:show="store.showCommentDrawer" />
    </div>
    <FullScreenDrawer v-model:show="store.showCommentDrawer" show-back>
      <CommentMenus />
      <h3 class="text-2xl font-semibold text-gray-900 dark:text-gray-700 py-2">
        FeedBack
      </h3>
      <div v-for="c in comments" :key="c._id">
        <Comment :comment="c" />
      </div>
    </FullScreenDrawer>
  </div>
</template>
