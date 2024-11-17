import api from '@/services/api';
import HttpExecutor from '@/services/HttpExecutor';
import { ref } from 'vue';
import { IUser, IUserRequest, IUserResponse } from '../types/user';

export const useUserApi = () => {
	const isLoading = ref(false);
	const users = ref<IUser[]>([]);
	const user = ref<IUser>();

	const getUsersByRole = async (role: string) => {
		try {
			isLoading.value = true;
			const path = api.user.base;
			const response = await HttpExecutor.post<string, IUser>(path, role);
			user.value = response;
		} catch (error) {
			console.error(error);
		} finally {
			isLoading.value = false;
		}
	};

	const getUsers = async () => {
		try {
			isLoading.value = true;
			const path = api.user.all;
			const response = await HttpExecutor.get<IUserResponse>(path);
			users.value = Array.isArray(response.content) ? response.content : [];
		} catch (error) {
			console.error(error);
		} finally {
			isLoading.value = false;
		}
	};

	const createUser = async (data: IUserRequest) => {
		try {
			isLoading.value = true;
			const path = api.user.base;
			const response = await HttpExecutor.post<IUserRequest, IUser>(path, data);
			user.value = response;
		} catch (error) {
			console.error(error);
		} finally {
			isLoading.value = false;
		}
	};

	return {
		isLoading,
		users,
		user,
		getUsersByRole,
		createUser,
		loadUsers: getUsers,
	};
};
