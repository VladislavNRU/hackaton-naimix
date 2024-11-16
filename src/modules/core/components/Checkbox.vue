<template>
	<div>
		<label class="checkbox-rel">
			<input class="checkbox" type="checkbox" v-model="isOpen" />
			Расклад для сотрудников
			<span class="checkmark"></span>
		</label>
		<transition name="fade">
			<ul v-if="isOpen" ref="list">
				<CompanyCard />
			</ul>
		</transition>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CompanyCard from './CompanyCard.vue';

const isOpen = ref(false);
const items = ref(['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4']);
</script>

<style scoped>
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
