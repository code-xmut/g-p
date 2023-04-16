// 详情页是否正确渲染

import { mount } from '@vue/test-utils'

// The component to test
const ShotDetail = {
  template: `
  <div class="shot-detail">
    <div class="shot-detail__title">
      <h2>标题</h2>
    </div>
    <div class="shot-detail__content">
      <p>内容</p>
    </div>
  </div>
  `,
}

test('shot detail exist', async () => {
  const wrapper = mount(ShotDetail)

  const shotDetail = wrapper.find('.shot-detail')

  expect(shotDetail.exists()).toBe(true)
})

test('shot detail title exist', async () => {
  const wrapper = mount(ShotDetail)

  const shotDetailTitle = wrapper.find('.shot-detail__title')

  expect(shotDetailTitle.exists()).toBe(true)
})

test('shot detail content exist', async () => {
  const wrapper = mount(ShotDetail)

  const shotDetailContent = wrapper.find('.shot-detail__content')

  expect(shotDetailContent.exists()).toBe(true)
})
