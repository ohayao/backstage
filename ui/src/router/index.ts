import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/admin'
    },
    {
        path: '/admin',
        component: () => import('@/views/admin/layout/index.vue'),
        children: [
            {
                path: '/admin/test1',
                name: 'test1',
                component: () => import('@/views/page/test1.vue')
            },
            {
                path: '/admin/test2',
                name: 'test2',
                component: () => import('@/views/page/test2.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) document.title = to.meta.title as string;
    next();
});
export default router;
