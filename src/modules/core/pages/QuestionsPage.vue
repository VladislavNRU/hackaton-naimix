<template>
	<div class="content">
		<div class="candidate-evaluation-page">
			<h1 class="h1">Оценка характеристик кандидатов</h1>
			<p class="p">
				Пожалуйста, оцените важность различных характеристик для поиска кандидатов в вашу компанию
			</p>
			<!-- Массив вопросов для отображения -->
			<div class="questionnaire">
				<CompanyCard
					:name="question"
					:logo="logo"
					class="card"
					v-for="question in questions"
					:key="question"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import logo from '@assets/images/Logo-g.png';
import { ref } from 'vue';
import CompanyCard from '../components/CompanyCard.vue';
// Массив вопросов
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

// Ответы на вопросы
const answers = ref<string[]>(new Array(questions.length).fill(''));
</script>

<style scoped>
.candidate-evaluation-page {
	font-family: Arial, sans-serif;
	padding: 20px;
}

.questionnaire {
	margin-bottom: 20px;
	width: 900px;
	max-height: 650px;
	overflow-y: scroll;
	margin: 0 auto;
}

.content {
	padding-top: 150px;
}

.card {
	background: rgba(0, 0, 0, 0.05);
	width: 797px;
	height: 149px;
	display: flex;
	align-items: center;
	border-radius: 50px;
	text-align: center;
	padding-left: 40px;
	width: 90%;
	margin-bottom: 10px;
}

.results {
	margin-top: 20px;
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

h2 {
	margin-bottom: 10px;
}

ul {
	list-style-type: none;
	padding-left: 0;
}

input[type='radio']:checked + label:before {
	display: none;
}

li {
	margin: 5px 0;
}
</style>
