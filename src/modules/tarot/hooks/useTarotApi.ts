import { ref } from 'vue';
import { ICard, ICardResponse } from '../types/card';
import api from '@/services/api';
import HttpExecutor from '@/services/HttpExecutor';
import { ISavedSpread, ISpread, ISpreadRequest, ISpreadResponse } from '../types/spread';

export function useTarotApi() {
	const isLoading = ref(false);
	const cards = ref<ICard[]>([]);
	const savedSpread = ref<ISavedSpread | null>(null);

	const shuffleCards = (array: ICard[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	};

	const getCards = async () => {
		try {
			isLoading.value = true;
			const path = api.cards;
			const response = await HttpExecutor.get<ICardResponse>(path);
			cards.value = response.content.map(card => ({ ...card, isFlipped: false }));
			shuffleCards(cards.value);
		} catch (error) {
			console.error(error);
		} finally {
			isLoading.value = false;
		}
	};

	const saveSpread = async (spread: ISpread) => {
		try {
			isLoading.value = true;
			const path = api.spread;
			const response = await HttpExecutor.post<ISpreadRequest, ISavedSpread>(path, spread);
			console.log(response)
			savedSpread.value = response;
		} catch (error) {
			console.error(error);
		} finally {
			isLoading.value = false;
		}
	};

	return {
		cards,
		loadCards: getCards,
		savedSpread,
		saveSpread,
		isLoading,
	};
}
