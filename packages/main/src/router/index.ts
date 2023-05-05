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
              path: 'draft',
              name: 'draft',
              component: () => import('@/components/Profile/DraftTab.vue'),
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
          path: 'account',
          name: 'account',
          component: () => import('@/pages/account.vue'),
          children: [
            {
              path: '',
              name: 'general',
              component: () => import('@/components/Account/Tabs/GeneralTab.vue'),
            },
            {
              path: 'profile',
              name: 'edit-profile',
              component: () => import('@/components/Account/Tabs/EditProfileTab.vue'),
            },
            {
              path: 'security',
              name: 'security',
              component: () => import('@/components/Account/Tabs/SecurityTab.vue'),
            },
          ],
        },
        {
          path: 'account/destory',
          name: 'destory',
          component: () => import('@/components/Account/Tabs/DeleteAccountTab.vue'),
        },
        {
          path: 'search/:query',
          name: 'search',
          component: () => import('@/pages/search.vue'),
        },
        {
          path: 'members/search/:query',
          name: 'members-search',
          component: () => import('@/pages/search.vue'),
        },
        {
          path: 'cli',
          name: 'cli',
          component: () => import('@/pages/cli.vue'),
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
