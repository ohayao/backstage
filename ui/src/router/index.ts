import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/page1',
    name: 'page1',
    component: () => import('../views/page1.vue'),
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import('../views/page2.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
