import api from '@/services/api';
import HttpExecutor from '@/services/HttpExecutor';
import { ref } from 'vue';

export const useQuestionsApi = () => {
	// const isLoading = ref(false);
	// const questions = ref<IQuestion[]>([]);
	// const error = ref<Error | null>(null);

	// const getQuestions = async () => {
	//   try {
	//     isLoading.value = true;
	//     const path = api.questions.getAll;
	//     const response = await HttpExecutor.get<IQuestion[]>(path);
	//     questions.value = response;
	//   } catch (error) {
	//     console.error(error);
	//     error.value = error as Error;
	//   } finally {
	//     isLoading.value = false;
	//   }
	// }

	const questions = [
		'Как вы оцениваете навыки работы в команде?',
		'Как вы оцениваете коммуникативные способности кандидата?',
		'Оцените лидерские качества кандидата.',
		'Как вы оцениваете способность кандидата решать нестандартные задачи?',
		'Как вы оцениваете навыки работы с критикой?',
		'Как бы вы оценили способность кандидата к обучению?',
		'Какие у кандидата сильные стороны?',
		'Какие у кандидата слабые стороны?',
		'Оцените профессиональные навыки кандидата.',
		'Как вы оцениваете мотивацию кандидата к работе?',
	];

	const answers = ref<string[]>(new Array(questions.length).fill(''));

	return {
		questions,
		answers,
	};
};
