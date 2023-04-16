import { mount } from '@vue/test-utils'

// The component to test
const Search = {
  template: `
  <div class="search">
    <div class="search__input">
      <input type="text" placeholder="请输入关键字" />
    </div>
    <div class="search__button">
      <button>搜索</button>
    </div>
  </div>

  <div class="search__result">
    <div class="search__result__title">
      <h2>搜索結果</h2>
    </div>
    <div class="search__result__content">
      <div class="search__result__content__item">
        <div class="search__result__content__item__title">
          <h3>标题</h3>
        </div>
        <div class="search__result__content__item__content">
          <p>内容</p>
        </div>
      </div>
    </div>
  </div>
  `,
  methods: {
  },
}

test('search exist', async () => {
  const wrapper = mount(Search)

  const search = wrapper.find('.search')

  expect(search.exists()).toBe(true)
})

test('search input exist', async () => {
  const wrapper = mount(Search)

  const searchInput = wrapper.find('.search__input')

  expect(searchInput.exists()).toBe(true)
})

test('search button exist', async () => {
  const wrapper = mount(Search)

  const searchButton = wrapper.find('.search__button')

  expect(searchButton.exists()).toBe(true)
})

test('search result exist', async () => {
  const wrapper = mount(Search)

  const searchResult = wrapper.find('.search__result')

  expect(searchResult.exists()).toBe(true)
})

test('search result title exist', async () => {
  const wrapper = mount(Search)

  const searchResultTitle = wrapper.find('.search__result__title')

  expect(searchResultTitle.exists()).toBe(true)
})

test('search result content exist', async () => {
  const wrapper = mount(Search)

  const searchResultContent = wrapper.find('.search__result__content')

  expect(searchResultContent.exists()).toBe(true)
})

test('search result content item exist', async () => {
  const wrapper = mount(Search)

  const searchResultContentItem = wrapper.find('.search__result__content__item')

  expect(searchResultContentItem.exists()).toBe(true)
})

test('search result content item title exist', async () => {
  const wrapper = mount(Search)

  const searchResultContentItemTitle = wrapper.find('.search__result__content__item__title')

  expect(searchResultContentItemTitle.exists()).toBe(true)
})

test('search result content item content exist', async () => {
  const wrapper = mount(Search)

  const searchResultContentItemContent = wrapper.find('.search__result__content__item__content')

  expect(searchResultContentItemContent.exists()).toBe(true)
})
