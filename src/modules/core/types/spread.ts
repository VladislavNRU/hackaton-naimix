export interface ISpread {
	isCompany: boolean;
	targetToId: number;
	targetFromId: number;
	cards: number[];
}

export interface ISavedResult {
	id: number;
	score: number;
}

export interface ISavedSpread {
	id: number;
	score: number;
	targetTo: string;
	targetFrom: string;
}

export interface ISavedSpreadResponse {
	content: ISavedSpread[];
}

export interface ISpreadResponse {
	content: ISavedResult;
}

export interface ISpreadRequest extends ISpread {}
