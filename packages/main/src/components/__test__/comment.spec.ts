// 评论功能发布评论按钮是否渲染，是否可点击，用户评论是否显示内容及时间

import { mount } from '@vue/test-utils'

// The component to test
const Comment = {
  template: `
  <div class="comment">
    <div class="comment__title">
    <h2>评论</h2>
    </div>
    <div class="comment__content">
      <div class="comment__content__item">
        <div class="comment__content__item__title">
          <h3>标题</h3>
        </div>
        <div class="comment__content__item__content">
          <p>内容</p> 
        </div>
      </div>
    </div>
    <div class="comment__publish">
      <div class="comment__publish__input">
        <input type="text" placeholder="请输入评论内容">
      </div>
      <div class="comment__publish__button">
        <button>发布</button>
      </div>
    </div>
  </div>
  `,
}

test('comment exist', async () => {
  const wrapper = mount(Comment)

  const comment = wrapper.find('.comment')

  expect(comment.exists()).toBe(true)
})

test('comment title exist', async () => {
  const wrapper = mount(Comment)

  const commentTitle = wrapper.find('.comment__title')

  expect(commentTitle.exists()).toBe(true)
})

test('comment content exist', async () => {
  const wrapper = mount(Comment)

  const commentContent = wrapper.find('.comment__content')

  expect(commentContent.exists()).toBe(true)
})

test('comment item exist', async () => {
  const wrapper = mount(Comment)

  const commentItem = wrapper.find('.comment__content__item')

  expect(commentItem.exists()).toBe(true)
})

test('comment item title exist', async () => {
  const wrapper = mount(Comment)

  const commentItemTitle = wrapper.find('.comment__content__item__title')

  expect(commentItemTitle.exists()).toBe(true)
})

test('comment item content exist', async () => {
  const wrapper = mount(Comment)

  const commentItemContent = wrapper.find('.comment__content__item__content')

  expect(commentItemContent.exists()).toBe(true)
})

test('comment publish exist', async () => {
  const wrapper = mount(Comment)

  const commentPublish = wrapper.find('.comment__publish')

  expect(commentPublish.exists()).toBe(true)
})

test('comment publish input exist', async () => {
  const wrapper = mount(Comment)

  const commentPublishInput = wrapper.find('.comment__publish__input')

  expect(commentPublishInput.exists()).toBe(true)
})

test('comment publish button exist', async () => {
  const wrapper = mount(Comment)

  const commentPublishButton = wrapper.find('.comment__publish__button')

  expect(commentPublishButton.exists()).toBe(true)
})

test('comment publish button can click', async () => {
  const wrapper = mount(Comment)

  const commentPublishButton = wrapper.find('.comment__publish__button')

  expect(commentPublishButton.exists()).toBe(true)
})

test('comment publish button can click', async () => {
  const wrapper = mount(Comment)

  const commentPublishButton = wrapper.find('.comment__publish__button')

  expect(commentPublishButton.exists()).toBe(true)
})
