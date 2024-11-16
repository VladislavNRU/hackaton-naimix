import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@modules': path.resolve(__dirname, './src/modules'),
			'@router': path.resolve(__dirname, './src/router'),
			'@plugins': path.resolve(__dirname, './src/plugins'),
			'@services': path.resolve(__dirname, './src/services'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/assets/styles/variables.scss";`,
			},
		},
	},
	server: {
		port: 3000,
		open: true,
	},
	build: {
		outDir: 'dist',
		sourcemap: true,
	},
});
