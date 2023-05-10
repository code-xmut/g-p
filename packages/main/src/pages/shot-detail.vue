<script setup lang="ts">
import { useRoute } from 'vue-router'
import { convertBlocks2MD } from '@/utils/convertBlocks2MD'
import { useShotStore } from '@/store'
import { useIsMobile } from '@/composables'

const store = useShotStore()
const route = useRoute()
const { isMobile } = useIsMobile()

const shotContent = ref('')

onMounted(async () => {
  const shot = await store.getShot()
  try {
    shotContent.value = convertBlocks2MD(JSON.parse(shot.content))
  }
  catch (error) {
    console.error(error)
  }
  const shotId = route.fullPath.split('/')[2]
  store.setShotId(shotId)
  await store.getComments()
})
</script>

<template>
  <div
    class="px-2 h-full md:flex justify-between md:pr-10 md:pl-[3vw] xl:pl-[20vw]"
    :class="{ 'md:pl-[5vw]': store.showCommentDrawer }"
  >
    <div class="w-full md:w-2/3">
      <DetailHeader v-model:show-save-modal="store.showCollectionModal" user-name="rich4st" />
      <div v-if="shotContent">
        <Markdown :content="shotContent" />
      </div>
    </div>
    <div class="hidden md:block">
      <ShotActions v-if="!store.showCommentDrawer" v-model:show="store.showCommentDrawer" v-model:detail="store.showShotDetail" />
    </div>
    <FullScreenDrawer v-if="isMobile" v-model:show="store.showCommentDrawer" show-back>
      <DrawerContent />
    </FullScreenDrawer>
    <FullContentDrawer v-else v-model:show="store.showCommentDrawer" show-back>
      <DrawerContent />
    </FullContentDrawer>
    <SaveShotModal v-model:show="store.showCollectionModal" :shot-id="store.shotId" />
    <ShotDetailModal />
  </div>
</template>
