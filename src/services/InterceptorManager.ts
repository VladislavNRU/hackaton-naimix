import { CResponse, InterceptorHandle } from './type';

export class InterceptorManager {
	private readonly chain: Array<InterceptorHandle> = [];
	use(
		resolve: (response: CResponse) => CResponse,
		reject: (error: CResponse) => CResponse
	) {
		this.chain.push({ resolve, reject });
	}

	resolve(response: CResponse): CResponse {
		this.chain.forEach(item => {
			response = item.resolve(response);
		});
		return response;
	}
	reject(error: CResponse): CResponse {
		this.chain.forEach(item => {
			error = item.reject(error);
		});
		return error;
	}
}
