export interface ICompany {
	id: number;
	name: string;
	phone: string;
	email: string;
	address: string;
}

export interface ICompanyResponse {
	content: ICompany[];
}
