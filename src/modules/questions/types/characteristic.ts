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

export interface ICharacteristicResponse {
	content: ICharacteristic[];
}
