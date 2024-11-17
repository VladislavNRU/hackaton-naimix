<template>
	<div class="radio-group">
		<label class="radio-button">
			<input type="radio" :name="name" :value="value" v-model="internalValue" class="radio-input" />
			<span class="radio-label">{{ label }}</span>
		</label>
	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps<{
	label: string;
	value: string | number;
	name: string;
	modelValue: string | number | null;
}>();
const emit = defineEmits<{
	(e: 'update:modelValue', value: string | number): void;
}>();

const internalValue = computed({
	get: () => props.modelValue,
	set: value => {
		emit('update:modelValue', value);
	},
});
</script>
<style scoped lang="scss">
.radio-svg {
	margin-right: 10px;
	cursor: pointer;
}

.radio-group {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.radio-button {
	display: flex;
	align-items: center;
	margin: 8px 0;
}

.radio-input {
	display: none;
}

.radio-input + .radio-label {
	position: relative;
	padding-left: 30px;
	cursor: pointer;
	font-size: 16px;
	color: #333;
}

.radio-input + .radio-label::before {
	content: '';
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: #fff;
	border: 2px solid $primary-color; /* Цвет рамки */
	transition:
		background-color 0.3s,
		border-color 0.3s;
}

.radio-input:checked + .radio-label::before {
	border-color: $primary-color; /* Цвет рамки при активном состоянии */
	background-color: $primary-color;
}

.radio-input:checked + .radio-label::after {
	content: '';
	position: absolute;
	left: 7px;
	top: 7px;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	transition: background-color 0.3s;
}

.radio-label {
	display: inline-block;
	padding: 8px;
	font-size: 14px;
	color: #333;
	user-select: none;
}
</style>
