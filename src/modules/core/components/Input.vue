<template>
	<div class="input-container">
		<label for="input" class="input-label">{{ label }}</label>
		<input
			id="input"
			name="input"
			:class="listItemClass"
			v-model="inputValue"
			@change="select"
			type="text"
			:placeholder="placeholder"
		/>
	</div>
</template>

<script setup lang="ts">
import { computed, defineEmits, ref } from 'vue';

const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	placeholder: {
		type: String,
		default: 'Введите текст',
	},
});

const emits = defineEmits<{
	(e: 'select', selected: boolean): void;
}>();

const selected = ref(false);
const inputValue = ref('');

const listItemClass = computed(() => ({
	'list-item': true,
	selected: selected.value,
}));

const select = () => {
	selected.value = !selected.value;
	emits('select', selected.value);
};
</script>

<style scoped>
.input-container {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 20px;
}

.input-label {
	font-size: 14px;
	font-weight: 500;
	margin-bottom: 5px;
}

input {
	padding: 10px;
	border-radius: 4px;
	border: 1px solid #ccc;
	font-size: 14px;
	transition: border-color 0.3s ease;
	outline: none;
	width: 100%;
}

input::placeholder {
	color: #999;
}

input:focus {
	border-color: #ff9929;
}

input:hover {
	border-color: #888;
}

.list-item {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding: 10px 20px;
	background: #fff;
	border-radius: 8px;
	border: 1px solid #ff9929;
	transition: background-color 0.3s ease;
}

.list-item:hover {
	background-color: #f7f7f7;
}

.list-item.selected {
	background-color: #ff9929;
	color: #fff;
}
</style>
