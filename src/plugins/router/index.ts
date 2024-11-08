import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () => import('@modules/core/pages/HomePage.vue'),
		//meta: { requiresAuth: true, onlyAdmin: true },
    },
	{
		path: '/login',
		name: 'login',
		component: () => import('@modules/auth/pages/AuthPage.vue'),
	},
	{
		path: '/:catchAll(.*)',
		name: '404',
		component: () => import('@modules/core/pages/NotFoundPage.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

//router.beforeEach(authGuard);

export default router;
