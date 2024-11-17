import api from '@/services/api';
import { ICharacteristic, ICharacteristicProccessed, ICharacteristicResponse } from '../types/characteristic';
import { ref } from 'vue';
import HttpExecutor from '@/services/HttpExecutor';

export const useCharacteristicApi = () => {
	const isLoading = ref(false);
	const characteristics = ref<ICharacteristic[]>([]);

	const getCharacteristics = async () => {
		try {
			isLoading.value = true;
			const path = api.characteristic.base;
			const response = await HttpExecutor.get<ICharacteristicResponse>(path);
			characteristics.value = response.content;
		} catch (error) {
			console.error(error);
		} finally {
			isLoading.value = false;
		}
	};

	const saveCharacteristics = async (characteristics: ICharacteristicProccessed, companyId: number) => {
		try {
			isLoading.value = true;
			const path = api.characteristic.save(companyId);
			await HttpExecutor.post<ICharacteristicProccessed, null>(path, characteristics);
		} catch (error) {
			console.error(error);
		} finally {
			isLoading.value = false;
		}
	};

	return {
		isLoading,
		characteristics,
		saveCharacteristics,
		loadCharacteristics: getCharacteristics,
	};
};
