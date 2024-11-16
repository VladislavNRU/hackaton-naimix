import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () => import('@modules/core/pages/HomePage.vue'),
		//meta: { requiresAuth: true, onlyAdmin: true },
	},
	// {
	// 	path: '/login',
	// 	name: 'login',
	// 	component: () => import('@modules/auth/pages/AuthPage.vue'),
	// },
	{
		path: '/tarot-spread',
		name: 'tarot-spread',
		component: () => import('@/modules/tarot/pages/TarotSpread.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/',
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

//router.beforeEach(authGuard);

export default router;
