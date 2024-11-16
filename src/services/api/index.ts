import { BASE_URL } from '@/utils/constants';

export default Object.freeze({
	auth: {
		login: `${BASE_URL}/auth/login`,
		signup: `${BASE_URL}/auth/signup`,
	},
	cards: {
		getAll: `${BASE_URL}/cards`,
	}
});
