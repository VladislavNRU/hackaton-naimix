export interface ICard {
	id: number;
	name: string;
	meaningUp: string;
	meaningRev: string;
	description: string;
	isFlipped?: boolean;
}

export interface ICardResponse {
	content: ICard[];
}