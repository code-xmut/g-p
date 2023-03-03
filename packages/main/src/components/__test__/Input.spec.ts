import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from '../base/Input.vue'

describe('Input', () => {
  it('should work', () => {
    const wrapper = mount(Input, {
      props: {
        value: 'test',
      },
    })

    // test if props are passed
    expect(wrapper.props().value).toBe('test')
    // test if the input value is correct
    expect(wrapper.find('input').element.value).toBe('test')
  })
})
