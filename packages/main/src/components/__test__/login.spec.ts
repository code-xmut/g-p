import { mount } from '@vue/test-utils'

// The component to test
const MessageComponent = {
  template: `
  <img />
  <p>{{ msg }}</p>
  <form>
    <input id="account" type="text" />
    <input id="password" type="password" />
    <button type="submit" @click="submit">Submit</button>
  </form>
  <button id="gooogle" />
  <button id="facebook" />
  `,
  props: ['msg'],
  methods: {
    submit() {
      return true
    },
  },
}

test('displays title', () => {
  const wrapper = mount(MessageComponent, {
    props: {
      msg: 'Hello world',
    },
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world')
})

test('input value', async () => {
  const wrapper = mount(MessageComponent)

  const account = wrapper.find('#account')
  await account.setValue('test')
  const password = wrapper.find('#password')
  await password.setValue('test')

  expect(account.element.value).toBe('test')
  expect(password.element.value).toBe('test')
})

test('submit exist', async () => {
  const wrapper = mount(MessageComponent)

  const submit = wrapper.find('button')

  expect(submit.exists()).toBe(true)
})

test('submit success', async () => {
  const wrapper = mount(MessageComponent)

  const submit = wrapper.find('button')

  await submit.trigger('click')

  expect(wrapper.vm.submit()).toBe(true)
})

test('cover exist', async () => {
  const wrapper = mount(MessageComponent)

  const cover = wrapper.find('img')

  expect(cover.exists()).toBe(true)
})

test('google button exist', async () => {
  const wrapper = mount(MessageComponent)

  const google = wrapper.find('#gooogle')
  const facebook = wrapper.find('#facebook')

  expect(google.exists()).toBe(true)
  expect(facebook.exists()).toBe(true)
})
