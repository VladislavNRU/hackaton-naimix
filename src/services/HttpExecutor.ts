import { InterceptorManager } from './InterceptorManager';
import { CRequestInit, CResponse, Interceptors } from './type';

class HttpExecutor {
	public interceptors: Interceptors = {
		request: new InterceptorManager(),
		response: new InterceptorManager(),
	};

	private async request<OUT>(url: string, options: CRequestInit): Promise<OUT> {
		const handleResponse = async (response: CResponse) => {
			if (options.responseType === 'blob') {
				const blob = await response.blob();
				return blob as unknown as OUT;
			}

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				console.error('Server error:', errorData);
				throw errorData;
			}

			response.data = await response.json();
			this.interceptors.response.resolve(response);
			return response.data as OUT;
		};

		const handleNetworkError = (error: Error) => {
			console.error('Handle network error:', error);
			throw error;
		};

		const token = localStorage.getItem('accessToken');
		if (options.method !== 'OPTIONS' && token) {
			options.headers = {
				...options.headers,
				Authorization: `Bearer ${token}`,
			};
		}

		if (options.method && !['GET', 'OPTIONS'].includes(options.method)) {
			options.headers = {
				...options.headers,
				'Content-Type': 'application/json',
			};
		}
		return fetch(url, options).then(handleResponse, handleNetworkError);
	}

	public get<OUT>(url: string, options?: RequestInit) {
		return this.request<OUT>(url, {
			method: 'GET',
			...options,
		});
	}

	public post<IN, OUT>(url: string, data: IN, options?: RequestInit) {
		return this.request<OUT>(url, {
			method: 'POST',
			body: JSON.stringify(data),
			...options,
		});
	}

	public put<IN, OUT>(url: string, data: IN, options?: RequestInit) {
		return this.request<OUT>(url, {
			method: 'PUT',
			body: JSON.stringify(data),
			...options,
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
