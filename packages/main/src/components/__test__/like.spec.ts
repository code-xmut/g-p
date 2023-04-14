// 点赞功能图标及点赞数是否正确

import { mount } from '@vue/test-utils'

// The component to test
const Like = {
  template: `
  <div class="like">
    <div class="like__icon">
      <i class="iconfont icon-like"></i>
    </div>
    <div class="like__count">
      <span>0</span>
    </div>
  </div>
  `,
}

test('like exist', async () => {
  const wrapper = mount(Like)

  const like = wrapper.find('.like')

  expect(like.exists()).toBe(true)
})

test('like icon exist', async () => {
  const wrapper = mount(Like)

  const likeIcon = wrapper.find('.like__icon')

  expect(likeIcon.exists()).toBe(true)
})

test('like count exist', async () => {
  const wrapper = mount(Like)

  const likeCount = wrapper.find('.like__count')

  expect(likeCount.exists()).toBe(true)
})
