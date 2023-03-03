import serve from '@/utils/request'

export const getBooks = () => {
  return serve({
    url: '/books',
    method: 'get',
  })
}
