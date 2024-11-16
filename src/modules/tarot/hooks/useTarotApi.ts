export function useTarotApi() {
	const cardNames = [
		'The Fool',
		'The Magician',
		'The High Priestess',
		'The Empress',
		'The Emperor',
		'The Hierophant',
		'The Lovers',
		'The Chariot',
		'Strength',
		'The Hermit',
		'Wheel of Fortune',
		'Justice',
		'The Hanged Man',
		'Death',
		'Temperance',
		'The Devil',
		'The Tower',
		'The Star',
		'The Moon',
		'The Sun',
		'Judgement',
		'The World',
	];

	const generateCards = (): {
		id: string;
		name: string;
		frontImage: string;
		isFlipped: boolean;
	}[] => {
		const cards = [];
		for (let i = 0; i < cardNames.length; i++) {
			const name = cardNames[i];
			const card = {
				id: `card${i + 1}`,
				name,
				frontImage: '',
				isFlipped: false,
			};
			cards.push(card);
		}
		return cards;
	};

	return {
		generateCards,
	};
}
