<template>
	<div class="custom-select">
		<div class="select-box" @click="toggleList"></div>

		<ul v-if="isOpen" class="options-list">
			<li v-for="option in options" :key="option" @click="selectOption(option)" class="option-item">
				{{ option }}
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
	isOpen: boolean;
	options: string[];
}>();
const emit = defineEmits<{
	(e: 'update:isOpen', value: boolean): void;
	(e: 'update:selectedOption', value: string | null): void; // Событие для передачи выбранной опции
}>();

// Реактивное состояние для выбранной опции
const selectedOption = ref<string | null>(null);

// Методы
const toggleList = () => {
	// Меняет состояние isOpen
	emit('update:isOpen', !props.isOpen);
};

const selectOption = (option: string) => {
	// Устанавливает выбранную опцию
	selectedOption.value = option;
	// Отправляет выбранную опцию родительскому компоненту
	emit('update:selectedOption', selectedOption.value);
	// Закрывает список после выбора
	emit('update:isOpen', false);
};
</script>

<style scoped>
.custom-select {
	position: relative;
	width: 100%;
	font-family: Arial, sans-serif;
}

.select-box {
}

.options-list {
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	border: 1px solid #ccc;
	max-height: 150px;
	overflow-y: auto;
	background-color: white;
	margin: 0;
	padding: 10px 0;
	list-style-type: none;
}

.option-item {
	padding: 10px;
	cursor: pointer;
}

.option-item:hover {
	background-color: #f0f0f0;
}
</style>
