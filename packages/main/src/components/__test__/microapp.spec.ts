import { createRouter, createWebHistory } from 'vue-router'
import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import Home from './Home.vue'
import About from './About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

describe('Router', () => {
  it('renders the Home page on mount', () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.find('h1').text()).to.equal('Blog')
  })

  it('renders the About page when the route changes', async () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [router],
      },
    })

    await router.push('/about')

    expect(wrapper.find('h1').text()).to.equal('Blog')
  })
})
