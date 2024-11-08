import { createApp } from 'vue'
import App from './App.vue'

import router from './plugins/router/index';
import primeVue from './plugins/primeVue/index';
import dayJS from './plugins/dayJS';
import i18n from './plugins/i18n';

import ToastService from 'primevue/toastservice';

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import '@/assets/styles/main.scss'

(async function () {
	const app = createApp(App);
	app.use(router);
	app.use(dayJS);
	app.use(ToastService);
	app.use(i18n)
	primeVue(app);
	app.mount('#app');
})();