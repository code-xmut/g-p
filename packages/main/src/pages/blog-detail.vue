<script setup lang="ts">
import { useBlog } from '@/composables';
import { convertBlocks2MD } from '@/utils/convertBlocks2MD'
import { UserInfo } from '@gp/types/user';

const {
  blog,
  findShotContent,
  findBlogAuthor
} = useBlog();

const blogMD = ref()
const blogAuthor = ref<UserInfo>()

onMounted(async () => {
  const { data } = await findShotContent()
  blog.value = data[0]
  blogMD.value = convertBlocks2MD(JSON.parse(data[0].content))
  blogAuthor.value = await findBlogAuthor()
})
</script>

<template>
  <div>
    <div class="flex justify-center items-center mb-10">
      <Avatar :src="blogAuthor?.avatar" size-class="w-14 h-14 md:w-20 md:h-20">
        <div>
          <p class="text-2xl font-semibold text-gray-900 dark:text-gray-400 ml-4 cursor-pointer hover:text-pink-500">
            {{ blogAuthor?.name }}
          </p>
          <p class="flex items-center ml-3 text-gray-700 dark:text-gray-400">
            <Icon icon="material-symbols:location-on-outline" class="w-4 h-4" />
            {{ blogAuthor?.location }}
          </p>
        </div>
      </Avatar>
    </div>
    <Markdown class="prose my-0 mx-auto " v-if="blogMD" :content="blogMD" />
  </div>
</template>
