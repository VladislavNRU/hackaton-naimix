import api from '@/services/api';
import HttpExecutor from '@/services/HttpExecutor';
import { ref } from 'vue';
import { ICompany, ICompanyResponse } from '../types/company';

export const useCompanyApi = () => {
	const isLoading = ref(false);
	const companies = ref<ICompany[]>([]);

	const getCompanies = async () => {
		try {
			isLoading.value = true;
			const path = api.company;
			const response = await HttpExecutor.get<ICompanyResponse>(path);
			companies.value = response.content;
      console.log(response.content)
		} catch (error) {
			console.error(error);
		} finally {
			isLoading.value = false;
		}
	};

	return {
		isLoading,
		companies,
		loadComnpanies: getCompanies,
	};
};
