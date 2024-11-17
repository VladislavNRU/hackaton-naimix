<template>
	<div class="survey-card">
		<div class="status-circle" :class="{ 'is-selected': isAnswered }"></div>
		<div class="header">
			<span class="progress">Вопрос {{ currentQuestion }} из {{ totalQuestions }}</span>
		</div>
		<div class="question-container">
			<span class="question-text">{{ question }}</span>
		</div>
		<div class="rating-container">
			<button
				v-for="value in ratingScale"
				:key="value"
				:class="getButtonClass(value)"
				@click="selectRating(value)"
			>
				{{ value }}
			</button>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
	question: string;
	currentQuestion: number;
	totalQuestions: number;
	onAnswer: (rating: number) => void;
}>();

const ratingScale = Array.from({ length: 10 }, (_, index) => index + 1);
const selectedRating = ref<number | null>(null);
const isAnswered = computed(() => selectedRating.value !== null);

function selectRating(value: number) {
	selectedRating.value = value;
	props.onAnswer(value);
}

const getButtonClass = (value: number) => {
	return [
		'rating-button',
		{
			active: selectedRating.value === value,
			inactive: selectedRating.value !== null && selectedRating.value !== value,
		},
	];
};
</script>
<style scoped lang="scss">
.survey-card {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	max-width: 800px;
	min-height: 180px;
	padding: 20px;
	border: 1px solid #d9d9d9;
	border-radius: 50px;
	background-color: #f7f7f7;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	margin-bottom: 20px;
	position: relative;
	text-align: left;
}

.header {
	display: flex;
	justify-content: flex-start;
	margin-bottom: 10px;
	font-size: 16px;
	font-weight: bold;
	color: #555;
}

.question-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
	position: relative;
}

.question-text {
	font-size: 18px;
	font-weight: 600;
	color: #333;
}

.status-circle {
	width: 30px;
	height: 30px;
	border: 3px solid #ccc;
	border-radius: 50%;
	position: absolute;
	top: 30px;
	right: 40px;
	transition:
		background-color 0.3s,
		border-color 0.3s;

	&.is-selected {
		border-color: #4caf50;
		background-color: transparent;

		&::after {
			content: '✔';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 16px;
			color: #4caf50;
		}
	}
}

.rating-container {
	display: flex;
	justify-content: center;
	gap: 10px;
}

.rating-button {
	width: 40px;
	height: 40px;
	border: none;
	border-radius: 50%;
	color: #fff;
	font-weight: bold;
	font-size: 14px;
	cursor: pointer;
	transition:
		background-color 0.3s,
		opacity 0.3s,
		transform 0.2s;

	opacity: 0.6;

	&.active {
		opacity: 1;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
		transform: scale(1.1);
	}

	&.inactive {
		opacity: 0.3;
		cursor: not-allowed;
	}

	&:not(.active):hover {
		transform: scale(1.05);
		opacity: 0.8;
	}

	&:nth-child(1) {
		background-color: #f44336;
	}
	&:nth-child(2) {
		background-color: #ff5722;
	}
	&:nth-child(3) {
		background-color: #ff9800;
	}
	&:nth-child(4) {
		background-color: #ffc107;
	}
	&:nth-child(5) {
		background-color: #cddc39;
	}
	&:nth-child(6) {
		background-color: #8bc34a;
	}
	&:nth-child(7) {
		background-color: #4caf50;
	}
	&:nth-child(8) {
		background-color: #388e3c;
	}
	&:nth-child(9) {
		background-color: #2e7d32;
	}
	&:nth-child(10) {
		background-color: #1b5e20;
	}
}
</style>
