import { InterceptorManager } from './InterceptorManager';

export interface IClientResult<T> {
	error?: IClientError;
	result: T;
}

export interface IClientError {
	error: {
		code: number;
		message?: string;
	};
}

export type CResponse = Response & { data: Record<string, any>; code?: number };

export interface CRequestInit extends RequestInit {
	responseType?: 'json' | 'blob';
}

export type CHeaders = HeadersInit & {
	['Content-Type']: 'application/json';
	Authorization?: string;
};

export type InterceptorHandle = {
	resolve: (response: CResponse) => CResponse;
	reject: (error: CResponse) => CResponse;
};

export interface Interceptors {
	request: InterceptorManager;
	response: InterceptorManager;
}
