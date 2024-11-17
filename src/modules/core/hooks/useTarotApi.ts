import { ref } from 'vue';
import { ICard, ICardResponse } from '../../tarot/types/card';
import api from '@/services/api';
import HttpExecutor from '@/services/HttpExecutor';
import {
	ISavedResult,
	ISavedSpreadResponse,
	ISavedSpread,
	ISpread,
	ISpreadRequest,
} from '../types/spread';

export function useTarotApi() {
	const isLoading = ref(false);
	const cards = ref<ICard[]>([]);
	const savedResult = ref<ISavedResult | null>(null);
	const savedSpreads = ref<ISavedSpread[]>([]);

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
			const path = api.spread.base;
			const response = await HttpExecutor.post<ISpreadRequest, ISavedResult>(path, spread);
			console.log(response);
			savedResult.value = response;
		} catch (error) {
			console.error(error);
		} finally {
			isLoading.value = false;
		}
	};

	const getSavedSpreads = async () => {
		try {
			isLoading.value = true;
			const path = api.spread.all;
			const response = await HttpExecutor.get<ISavedSpreadResponse>(path);
			savedSpreads.value = response.content;
		} catch (error) {
			console.error(error);
		} finally {
			isLoading.value = false;
		}
	};

	return {
		cards,
		loadCards: getCards,
		savedResult,
		savedSpreads,
		loadSavedSpreads: getSavedSpreads,
		saveSpread,
		isLoading,
	};
}
