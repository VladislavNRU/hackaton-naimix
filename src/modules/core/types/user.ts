export interface IRole {
	id: number;
	name: string;
}

export interface IUser {
	id: number;
	name: string;
	email: string;
	roles: IRole[];
}

export interface IUserResponse {
	content: IUser | IUser[];
}

export interface IUserRequest {
	name: string;
	phone: string;
}
