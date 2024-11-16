<template>
	<div>
		<label :isOpen="isOpen" @update:isOpen="isOpen = $event" class="checkbox-rel">
			<input class="checkbox" type="checkbox" v-model="isOpen" />
			<div v-if="!selectedOption">Расклад для сотрудников</div>
			<div class="employee" v-else>
				<p>Выбранный сотрудник: {{ selectedOption }}</p>
			</div>
			<span class="checkmark"></span>
		</label>

		<CustomSelect
			:isOpen="isOpen"
			@update:isOpen="isOpen = $event"
			:options="options"
			@update:selectedOption="selectedOption = $event"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomSelect from './CustomSelect.vue';
const isOpen = ref(false);
const props = defineProps<{
	isOpen: boolean;
}>();
const selectedOption = ref<string | null>(null);
const options = ref([
	'Иванов Иван Иванович',
	'Неиванов Неиван Неиванович',
	'Петров Петр Петрович',
	'Непетров Непетр Непетрович',
]);
</script>

<style scoped>
.employee {
	text-align: start;
}
.checkbox {
	flex-direction: column;
	& label {
		align-self: start;
	}
}
.checkmark {
	position: absolute;
	top: 0;
	left: 0;
	height: 25px;
	width: 25px;
	background-color: #eee;
}
.checkbox-rel {
	position: relative;
	display: flex;
	align-items: center;
	padding-left: 50px;
}
.container input {
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
}
/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
	background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
	background-color: #ff9929;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
	content: '';
	position: absolute;
	display: none;
}

ul {
	padding: 0;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
	display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
	left: 9px;
	top: 5px;
	width: 5px;
	height: 10px;
	border: solid white;
	border-width: 0 3px 3px 0;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
}
</style>
