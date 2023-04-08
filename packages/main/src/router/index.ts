import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layouts/index.vue'
import Profile from '../pages/profile.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: '',
          name: 'main',
          component: () => import('@/layouts/Main/index.vue'),
        },
        {
          path: '/:name',
          component: Profile,
          children: [
            {
              path: '',
              name: 'work',
              component: () => import('@/components/Profile/WorkTab.vue'),
            },
            {
              path: 'collections',
              name: 'collections',
              component: () => import('@/components/Profile/CollectionsTab.vue'),
            },
            {
              path: 'liked',
              name: 'liked',
              component: () => import('@/components/Profile/LikeShotsTab.vue'),
            },
          ],
        },
        {
          path: 'shots/:id',
          name: 'shots',
          component: () => import('@/pages/shot-detail.vue'),
        },
        {
          path: 'collection',
          name: 'collection',
          component: () => import('@/pages/collections.vue'),
        },
        {
          path: '/blog:catchAll(.*)',
          name: 'blog',
          component: () => import('@/pages/blog.vue'),
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/pages/auth.vue'),
    },
    {
      path: '/uploads',
      name: 'uploads',
      component: () => import('@/pages/uploads.vue'),
      children: [
        {
          path: '',
          name: 'upload',
          component: () => import('@/pages/upload.vue'),
        },
        {
          path: 'editor',
          name: 'editor',
          component: () => import('@/pages/editor.vue'),
        },
      ],
    },

  ],
})

export default router
