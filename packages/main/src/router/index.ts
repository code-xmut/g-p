import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layouts/index.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Layout,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login.vue'),
    },
  ],
})

export default router
