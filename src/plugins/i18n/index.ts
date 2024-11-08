import { createI18n } from 'vue-i18n';
import ru from '@modules/core/locales/ru.json';
import en from '@modules/core/locales/en.json';

function loadLocaleMessages() {
	const locales = { en, ru };

	const modules = import.meta.glob('../modules/**/locales/*.json', {
		eager: true,
	});

	for (const path in modules) {
		const moduleLocale = modules[path] as Record<string, any>;
		const locale = path.match(/\/locales\/(\w+)\.json$/)?.[1];

		if (locale) {
			locales[locale] = { ...locales[locale], ...moduleLocale };
		}
	}

	return locales;
}

const i18n = createI18n({
	legacy: false,
	locale: 'ru',
	fallbackLocale: 'ru',
	globalInjection: true,
	messages: loadLocaleMessages(),
});

export default i18n;
