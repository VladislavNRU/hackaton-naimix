import { createApp } from 'vue';
import App from './App.vue';
import router from '@/plugins/router/index';
import '@assets/styles/main.scss';
import { registerChartComponents } from '@/plugins/chartjs/index';

registerChartComponents();

(async function () {
	const app = createApp(App);
	app.use(router);
	app.mount('#app');
})();
