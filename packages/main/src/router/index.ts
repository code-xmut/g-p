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
      children: [
        {
          path: '',
          name: 'main',
          component: () => import('@/layouts/Main/index.vue'),
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/pages/profile.vue'),
        },
        {
          path: 'collections',
          name: 'collections',
          component: () => import('@/pages/collections.vue'),
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/pages/auth.vue'),
    },
  ],
})

export default router
