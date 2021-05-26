import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/page1',
    name: 'page1',
    component: () => import('../views/page1.vue')
  },
  {
    path: '/',
    name: 'page2',
    component: () => import('../views/page2.vue')
  },
  {
    path: '/back',
    component: () => import('@/views/layouts/index.vue'),
    children:[
      {
        path: '/back/page1',
        name: 'back_page1',
        component: () => import('../views/page1.vue')
      },
      {
        path: '/back/page2',
        name: 'back_page2',
        component: () => import('../views/page2.vue')
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
