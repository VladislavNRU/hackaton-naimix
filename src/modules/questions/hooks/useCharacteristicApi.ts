import api from '@/services/api';
import { ICharacteristic, ICharacteristicResponse } from '../types/characteristic';
import { ref } from 'vue';
import HttpExecutor from '@/services/HttpExecutor';

export const useCharacteristicApi = () => {
	const isLoading = ref(false);
	const characteristics = ref<ICharacteristic[]>([]);

	const getCharacteristics = async () => {
		try {
			isLoading.value = true;
			const path = api.characteristic;
			const response = await HttpExecutor.get<ICharacteristicResponse>(path);
			characteristics.value = response.content;
		} catch (error) {
			console.error(error);
		} finally {
			isLoading.value = false;
		}
	};

	return {
		isLoading,
		characteristics,
		loadCharacteristics: getCharacteristics,
	};
};
