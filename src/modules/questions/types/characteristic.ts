export interface IQuestion {
	id: number;
	question: string;
}

export interface ICharacteristic {
	id: number;
	name: string;
	description: string;
	questions: IQuestion[];
}

export type ICharacteristicProccessed = Record<number, number>;

export interface ICharacteristicResponse {
	content: ICharacteristic[];
}
