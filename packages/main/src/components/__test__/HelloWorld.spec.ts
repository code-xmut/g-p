import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import About from '../../components/About.vue'

describe('HelloWorld', () => {
  it('should work', () => {
    const wrapper = mount(HelloWorld)

    wrapper.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('has props', () => {
    const wrapper = mount(About)

    expect(wrapper.text()).toBe('About')
  })
})
