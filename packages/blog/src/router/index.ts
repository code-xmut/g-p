import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'View',
    component: import('../pages/home.vue'),
  },
  {
    // blog detail
    path: '/:id',
    name: 'Detail',
    component: import('../pages/detail.vue'),
  },
]

export default routes
