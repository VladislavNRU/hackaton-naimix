class StorageService {
	constructor() {
		console.info(
			'%cStorage initialized',
			'color: lightgreen; font-weight: bold;'
		);
	}

	get<T>(key: string): T | null {
		const item = window.localStorage.getItem(key);
		try {
			return item ? (JSON.parse(item) as T) : null;
		} catch (error) {
			console.error(`Error parsing JSON from storage key: ${key}`, error);
			return null;
		}
	}

	set<T>(key: string, value: T): void {
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(`Error saving JSON to storage key: ${key}`, error);
		}
	}

	remove(key: string): void {
		window.localStorage.removeItem(key);
	}

	clear(): void {
		window.localStorage.clear();
	}
}

export default new StorageService();
