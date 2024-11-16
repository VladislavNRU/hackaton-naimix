import { ref } from "vue";
import { ICard } from "../types/card";
import api from "@/services/api";
import HttpExecutor from "@/services/HttpExecutor";

export function useTarotApi() {
	const isLoading = ref(false);
	const cards = ref<ICard[]>([]);


	const getCards = async () => {
		try {
			isLoading.value = true;
			const path = api.cards.getAll;
			console.log(1)
			const response = await HttpExecutor.get<ICard[]>(path);
			console.log(response);
			cards.value = response;
		} catch (error) {
			console.error(error);
		} finally {
			isLoading.value = false;
		}
	}

	return {
		cards,
		loadCards: getCards,
		isLoading
	};
}
