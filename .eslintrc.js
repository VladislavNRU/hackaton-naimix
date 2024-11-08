module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'eslint-config-prettier',
		'plugin:@typescript-eslint/recommended',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		project: './tsconfig.json',
		extraFileExtensions: ['.vue'],
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'vue/component-name-in-template-casing': 'off',
		'vue/multi-word-component-names': 'off',
	},
};
