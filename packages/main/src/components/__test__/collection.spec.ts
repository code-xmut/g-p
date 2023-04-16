// 收藏夹功能测试

import { mount } from '@vue/test-utils'

// The component to test
const Collection = {
  template: `
  <div class="collection">
    <div class="collection__title">
      <h2>收藏夹</h2>
    </div>
    <div class="collection__content">
      <div class="collection__content__item">
        <div class="collection__content__item__title">
          <h3>标题</h3>
        </div>
        <div class="collection__content__item__content">
          <p>内容</p>
        </div>
      </div>
    </div>
  </div>
  `,
  methods: {
  },
}

test('collection exist', async () => {
  const wrapper = mount(Collection)

  const collection = wrapper.find('.collection')

  expect(collection.exists()).toBe(true)
})

test('collection title exist', async () => {
  const wrapper = mount(Collection)

  const collectionTitle = wrapper.find('.collection__title')

  expect(collectionTitle.exists()).toBe(true)
})

test('collection content exist', async () => {
  const wrapper = mount(Collection)

  const collectionContent = wrapper.find('.collection__content')

  expect(collectionContent.exists()).toBe(true)
})

test('collection item exist', async () => {
  const wrapper = mount(Collection)

  const collectionItem = wrapper.find('.collection__content__item')

  expect(collectionItem.exists()).toBe(true)
})

test('collection item title exist', async () => {
  const wrapper = mount(Collection)

  const collectionItemTitle = wrapper.find('.collection__content__item__title')

  expect(collectionItemTitle.exists()).toBe(true)
})

test('collection item content exist', async () => {
  const wrapper = mount(Collection)

  const collectionItemContent = wrapper.find('.collection__content__item__content')

  expect(collectionItemContent.exists()).toBe(true)
})
