import { useRoute } from 'vue-router'
import type { Blog } from '@gp/types'
import { blogApi, userApi } from '@/api'

export default function useBlog() {
  const route = useRoute()

  const blog = ref<Blog>()
  const blogId = route.query.id as string

  const findBlogContent = async () => {
    return await blogApi.findBlogById(blogId)
  }

  const findBlogAuthor = async (author?: string) => {
    const { data } = await userApi.getUser(blog.value?.author ?? author)
    if (data)
      return data
  }

  return {
    blogId,
    blog,
    findBlogContent,
    findBlogAuthor,
  }
}
