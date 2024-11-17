import { BASE_URL } from '@/utils/constants';

export default Object.freeze({
	auth: {
		login: `${BASE_URL}/auth/login`,
		signup: `${BASE_URL}/auth/signup`,
	},
	cards: `${BASE_URL}/cards`,
	spread: {
		base: `${BASE_URL}/trumps`,
		all: `${BASE_URL}/trumps/all`,
	},
	user: {
		base: `${BASE_URL}/users`,
		all: `${BASE_URL}/users/all`,
	},
	company: `${BASE_URL}/companies`,
	question: `${BASE_URL}/questions`,
	characteristic: {
		base: `${BASE_URL}/characteristics`,
		save: (companyId: number) => `${BASE_URL}/characteristics/save/companies/${companyId}`, 
	},
});
