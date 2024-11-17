<template>
	<Loader v-if="isLoading" />
	<div class="content">
		<div class="candidate-evaluation-page">
			<div class="title">
				<h1 class="h1">Оценка характеристик кандидатов</h1>
				<p class="p">
					Пожалуйста, оцените важность различных характеристик для поиска кандидатов в вашу компанию
				</p>
			</div>
			<div class="questionnaire">
				<div
					v-for="(characteristic, index) in characteristics"
					:key="index"
					class="characteristic-card"
				>
					<div v-for="(question, qIndex) in characteristic.questions" :key="qIndex" class="card">
						<SurveyCard
							:question="question"
							:currentQuestion="getQuestionNumber(index, qIndex)"
							:totalQuestions="totalQuestions"
							@onAnswer="rating => handleAnswer(characteristic.id, qIndex, rating)"
						/>
					</div>
				</div>
			</div>
			<div class="actions">
				<button class="save-button" :disabled="!isAllAnswered" @click="saveAnswers">
					Сохранить
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import SurveyCard from '@/modules/questions/components/SurveyCard.vue';
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCharacteristicApi } from '../hooks/useCharacteristicApi';
import Loader from '@/modules/core/components/Loader.vue';

const router = useRouter();

const { isLoading, characteristics, loadCharacteristics } = useCharacteristicApi();

const answers = ref<Record<number, Record<number, number>>>({});

const totalQuestions = computed(() => {
	return characteristics.value.reduce(
		(sum, characteristic) => sum + characteristic.questions.length,
		0
	);
});

const getQuestionNumber = (characteristicIndex: number, questionIndex: number) => {
	return (
		characteristics.value
			.slice(0, characteristicIndex) // Берем все предыдущие характеристики
			.reduce((total, characteristic) => total + characteristic.questions.length, 0) +
		questionIndex +
		1
	);
};

const isAllAnswered = computed(() => {
	return Object.keys(answers.value).every(characteristicId => {
		const characteristic = characteristics.value.find(c => c.id === +characteristicId);
		return characteristic?.questions.every(
			(_, index) => answers.value[characteristicId]?.[index] !== null
		);
	});
});

function handleAnswer(characteristicId: number, questionIndex: number, rating: number) {
	if (!answers.value[characteristicId]) {
		answers.value[characteristicId] = {};
	}
	answers.value[characteristicId][questionIndex] = rating;
}

function saveAnswers() {
	console.log('Ответы сохранены:', answers.value);

	router.push('/tarot-spread');
}

onMounted(() => {
	if (!characteristics.value.length) {
		loadCharacteristics();
	}
});
</script>

<style scoped lang="scss">
.questionnaire {
	margin-bottom: 20px;
	width: 900px;
	max-height: 650px;
	overflow-y: scroll;
	margin: 0 auto;
}

.title {
	padding: 40px 0;
}

.characteristic-card {
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.card {
	background: rgba(0, 0, 0, 0.05);
	width: 800px;
	display: flex;
	align-items: center;
	border-radius: 50px;
	text-align: center;
	margin-bottom: 25px;
}

.actions {
	display: flex;
	justify-content: center;
}

.save-button {
	background-color: $primary-color;
	width: 300px;
	color: white;
	padding: 10px 20px;
	font-size: 16px;
	border: none;
	margin-top: 10px;
	border-radius: 15px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:disabled {
		background-color: #d9d9d9;
		color: #999;
		cursor: not-allowed;
	}

	&:not(:disabled):hover {
		background-color: #45a049;
	}
}

.h1 {
	font-size: 48px;
	color: #000;
	text-align: center;
}

.p {
	text-align: center;
	font-size: 14px;
	color: #000;
}
</style>
