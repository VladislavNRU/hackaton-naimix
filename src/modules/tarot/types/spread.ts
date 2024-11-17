export interface ISpread {
	isCompany: boolean;
	targetToId: number;
	targetFromId: number;
	cards: number[];
}

export interface ISavedSpread {
	id: number;
	score: number;
}

export interface ISpreadResponse {
	content: ISavedSpread;
}

export interface ISpreadRequest extends ISpread {}
