<template>
	<div class="content">
		<div class="candidate-evaluation-page">
			<div class="title">
				<h1 class="h1">Оценка характеристик кандидатов</h1>
				<p class="p">
					Пожалуйста, оцените важность различных характеристик для поиска кандидатов в вашу компанию
				</p>
			</div>
			<div class="questionnaire">
				<SurveyCard
					v-for="(question, index) in questions"
					:key="index"
					:question="question"
					:currentQuestion="index + 1"
					:totalQuestions="questions.length"
					:onAnswer="rating => handleAnswer(index, rating)"
					class="card"
				/>
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
import { useQuestionsApi } from '../hooks/useQuestionsApi';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const { questions } = useQuestionsApi();
const answers = ref<number[]>(new Array(questions.length).fill(null));

const isAllAnswered = computed(() => answers.value.every(answer => answer !== null));

function handleAnswer(index: number, rating: number) {
	answers.value[index] = rating;
	console.log(`Ответ на вопрос ${index + 1}:`, rating);
}

function saveAnswers() {
	console.log('Ответы сохранены:', answers.value);

	router.push('/tarot-spread');
}
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
	margin-top: 20px;
}

.save-button {
	background-color: $primary-color;
	color: white;
	padding: 10px 20px;
	margin-bottom: 20px;
	font-size: 16px;
	border: none;
	border-radius: 5px;
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
