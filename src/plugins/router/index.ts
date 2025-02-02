import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/modules/core/pages/StartPage.vue'),
		//meta: { requiresAuth: true, onlyAdmin: true },
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@modules/auth/pages/AuthPage.vue'),
	},
	{
		path: '/tarot-spread',
		name: 'tarot-spread',
		component: () => import('@modules/tarot/pages/TarotSpreadPage.vue'),
	},
	{
		path: '/questions',
		name: 'questions',
		component: () => import('@modules/questions/pages/QuestionPage.vue'),
	},
	{
		path: '/choose-company',
		name: 'choose-company',
		component: () => import('@/modules/chooseCompany/pages/ChoosePage.vue'),
	},
	{
		path: '/results',
		name: 'results',
		component: () => import('@modules/results/pages/ResultPage.vue'),
	},
	{
		path: '/details/:id',
		name: 'details',
		component: () => import('@modules/details/pages/DetailsPage.vue'),
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
