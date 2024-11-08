import { InterceptorManager } from './InterceptorManager';
import { CRequestInit, CResponse, Interceptors } from './type';

class HttpExecutor {
	public interceptors: Interceptors = {
		request: new InterceptorManager(),
		response: new InterceptorManager(),
	};

	private request<OUT>(url: string, options: CRequestInit): Promise<OUT> {
		const handleResponse = async (response: CResponse) => {
			if (options.responseType === 'blob') {
				const blob = await response.blob();
				return blob as unknown as OUT;
			}

			if (!response.ok) {
				const data = await response.json();
				throw data;
			}
			response.data = await response.json();
			this.interceptors.response.resolve(response);
			return response.data as OUT;
		};

		const handleNetworkError = (error: Error) => {
			console.error('Handle network error');
			throw error;
		};

		const token = localStorage.getItem('accessToken');
		options.headers = {
			...options.headers,
			Authorization: `Bearer ${token}`,
		};

		return fetch(url, options).then(handleResponse, handleNetworkError);
	}

	public get<OUT>(url: string, options?: RequestInit) {
		return this.request<OUT>(url, {
			method: 'GET',
			...options,
		});
	}

	public post<IN, OUT>(url: string, data: IN, options?: RequestInit) {
		let headers = {
			'Content-Type': 'application/json',
			...(options?.headers ?? {}),
		};

		return this.request<OUT>(url, {
			method: 'POST',
			headers,
			...options,
			body: JSON.stringify(data),
		});
	}

	public put<IN, OUT>(url: string, data: IN, options?: RequestInit) {
		let headers = {
			'Content-Type': 'application/json',
			...(options?.headers ?? {}),
		};

		return this.request<OUT>(url, {
			method: 'PUT',
			body: JSON.stringify(data),
			...options,
			headers,
		});
	}

	public delete(url: string, options?: RequestInit) {
		return this.request(url, {
			method: 'DELETE',
			...options,
		});
	}
}

export default new HttpExecutor();
