// 编辑用户个人信息表单测试

import { mount } from '@vue/test-utils'

// The component to test
const UserInfo = {
  template: `
  <div class="user-info">
    <div class="user-info__title">
      <h2>个人信息</h2>
    </div>
    <div class="user-info__form">
      <div class="user-info__form__item">
        <div class="user-info__form__item__label">
          <label>用户名</label>
        </div>
        <div class="user-info__form__item__input">
          <input type="text" placeholder="请输入用户名">
        </div>
      </div>
      <div class="user-info__form__item">
        <div class="user-info__form__item__label">
          <label>邮箱</label>
        </div>  
        <div class="user-info__form__item__input">
          <input type="text" placeholder="请输入邮箱">
        </div>
      </div>
      <div class="user-info__form__item">
        <div class="user-info__form__item__label">
          <label>密码</label>
        </div>
        <div class="user-info__form__item__input">
          <input type="password" placeholder="请输入密码">
        </div>
      </div>
      <div class="user-info__form__item">
        <div class="user-info__form__item__label">
          <label>确认密码</label>
        </div>
        <div class="user-info__form__item__input">
          <input type="password" placeholder="请再次输入密码">
        </div>
      </div>
      <div class="user-info__form__item">
        <div class="user-info__form__item__label">
          <label>个人简介</label>
        </div>
        <div class="user-info__form__item__input">
          <textarea placeholder="请输入个人简介"></textarea>
        </div>
      </div>
      <div class="user-info__form__item">
        <div class="user-info__form__item__label">
          <label>头像</label>
        </div>  
        <div class="user-info__form__item__input">  
          <input type="file" placeholder="请选择头像">
        </div>
      </div>
      <div class="user-info__form__item">
        <div class="user-info__form__item__label">
          <label>性别</label>
        </div>
        <div class="user-info__form__item__input">
          <select />
        </div>
      </div>
      <div class="user-info__form__item">
        <div class="user-info__form__item__label">
          <label>年龄</label>
        </div>
        <div class="user-info__form__item__input">
          <input type="number" placeholder="请输入年龄">
        </div>
      </div>
      </div>
      <div class="user-info__button">
        <button>提交</button>
      </div>
    </div>
  </div>
  `,
}

test('user-info exist', async () => {
  const wrapper = mount(UserInfo)

  const userInfo = wrapper.find('.user-info')

  expect(userInfo.exists()).toBe(true)
})

test('user-info title exist', async () => {
  const wrapper = mount(UserInfo)

  const userInfoTitle = wrapper.find('.user-info__title')

  expect(userInfoTitle.exists()).toBe(true)
})

test('user-info form exist', async () => {
  const wrapper = mount(UserInfo)

  const userInfoForm = wrapper.find('.user-info__form')

  expect(userInfoForm.exists()).toBe(true)
})

test('user-info item exist', async () => {
  const wrapper = mount(UserInfo)

  const userInfoItem = wrapper.find('.user-info__form__item')

  expect(userInfoItem.exists()).toBe(true)
})

test('user-info item label exist', async () => {
  const wrapper = mount(UserInfo)

  const userInfoItemLabel = wrapper.find('.user-info__form__item__label')

  expect(userInfoItemLabel.exists()).toBe(true)
})

test('user-info item input exist', async () => {
  const wrapper = mount(UserInfo)

  const userInfoItemInput = wrapper.find('.user-info__form__item__input')

  expect(userInfoItemInput.exists()).toBe(true)
})

test('user-info button exist', async () => {
  const wrapper = mount(UserInfo)

  const userInfoButton = wrapper.find('.user-info__button')

  expect(userInfoButton.exists()).toBe(true)
})

test('user-info button text', async () => {
  const wrapper = mount(UserInfo)

  const userInfoButton = wrapper.find('.user-info__button')

  expect(userInfoButton.text()).toBe('提交')
})

test('user-info button click', async () => {
  const wrapper = mount(UserInfo)

  const userInfoButton = wrapper.find('.user-info__button')

  await userInfoButton.trigger('click')

  expect(userInfoButton.text()).toBe('提交')
})

test('user-info form item label text', async () => {
  const wrapper = mount(UserInfo)

  const userInfoFormItemLabel = wrapper.find('.user-info__form__item__label')

  expect(userInfoFormItemLabel.text()).toBe('用户名')
})

test('user-info form item input text', async () => {
  const wrapper = mount(UserInfo)

  const userInfoFormItemInput = wrapper.find('.user-info__form__item__input')

  expect(userInfoFormItemInput.text()).toBe('')
})

test('user-info form item input placeholder', async () => {
  const wrapper = mount(UserInfo)

  const userInfoFormItemInput = wrapper.find('.user-info__form__item__input')

  expect(userInfoFormItemInput.attributes('placeholder')).toEqual(undefined)
})
