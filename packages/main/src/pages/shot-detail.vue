<script setup lang="ts">
import { useRoute } from 'vue-router'
import { shotApi } from '@/api'
import { convertBlocks2MD } from '@/utils/convertBlocks2MD'

const route = useRoute()

const shotId = route.fullPath.split('/')[2]
const shotContent = ref('')

onMounted(async () => {
  const { data } = await shotApi.findShotById(shotId)
  shotContent.value = convertBlocks2MD(JSON.parse(data.content))
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
      <ShotActions />
    </div>
  </div>
</template>
