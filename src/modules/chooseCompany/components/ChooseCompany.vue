<template>
	<div class="form-container">
		<div class="select-item">
			<Select
				:options="companies"
				:model-value="selectedCompany"
				option-value="name"
				placeholder="Компания"
				label="Выберите компанию:"
				@update:model-value="onUpdateCompany"
			></Select>
		</div>
		<div class="select-item">
			<Select
				:options="users"
				:model-value="selectedPersonFrom"
				option-value="name"
				placeholder="Сотрудник"
				label="Выберите сотрудника:"
				@update:model-value="onUpdatePersonFrom"
			></Select>
		</div>
		<div class="radio-group">
			<RadioButton
				label="Внутри компании"
				:value="1"
				name="group1"
				:model-value="selectedMode"
				@update:model-value="onUpdateMode"
			></RadioButton>
			<RadioButton
				label="Новый сотрудник"
				:value="0"
				name="group1"
				:model-value="selectedMode"
				@update:model-value="onUpdateMode"
			></RadioButton>
		</div>
		<div v-if="selectedMode" class="select-item">
			<Select
				:options="users"
				:model-value="selectedPersonTo"
				option-value="name"
				placeholder="Сотрудник"
				label="Выберите сотрудника:"
				@update:model-value="onUpdatePersonTo"
			></Select>
		</div>
		<div v-if="!selectedMode">
			<Input style="width: 460px" label="ФИО" placeholder="Введите ваше ФИО" />
			<Input label="Телефон" placeholder="Введите ваш телефон" />
		</div>
		<Button
			class="button-second"
			type="submit"
			priority="find"
			text="Перейти к опросу"
			@click="onSubmit"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import Button from '@modules/core/components/Button.vue';
import RadioButton from '@modules/core/components/RadioButton.vue';
import Input from '@modules/core/components/Input.vue';
import Select from '@modules/core/components/Select.vue';
import { ICompany } from '../types/company';
import { IUser } from '@/modules/core/types/user';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
	companies: {
		type: Array<ICompany>,
		default: () => [],
	},
	users: {
		type: Array<IUser>,
		default: () => [],
	},
});

const selectedCompany = ref<ICompany | string>('');
const selectedPersonTo = ref<IUser | string>('');
const selectedPersonFrom = ref<IUser | string>('');
const selectedMode = ref<number>(1);

watchEffect(() => {
	if (props.companies.length && !selectedCompany.value) {
		selectedCompany.value = props.companies[0];
	}
});

const onUpdateCompany = (value: ICompany) => {
	selectedCompany.value = value;
};

const onUpdatePersonFrom = (value: any) => {
	selectedPersonFrom.value = value;
};

const onUpdatePersonTo = (value: any) => {
	selectedPersonTo.value = value;
};

const onUpdateMode = (value: number) => {
	selectedMode.value = value;
};

const onSubmit = () => {
	localStorage.setItem('selectedCompany', JSON.stringify(selectedCompany.value));
	localStorage.setItem('personFrom', JSON.stringify(selectedPersonFrom.value));
	localStorage.setItem('personTo', JSON.stringify(selectedPersonTo.value));
	router.push('/questions');
};

// const filteredEmployeesFrom = computed(() => {
// 	if (selectedCompany.value) {
// 		const company = props.companies.find(c => c.name === selectedCompany.value);
// 		return company?.employees || [];
// 	}
// 	return [];
// });

// const filteredEmployeesTo = computed(() => {
// 	if (selectedCompany.value) {
// 		const company = props.companies.find(c => c.name === selectedCompany.value);
// 		return company?.employees || [];
// 	}
// 	return [];
// });
</script>

<style scoped lang="scss">
.form-container {
	width: 100%;
	max-width: 900px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.button-second {
	margin-top: 40px;
	color: #fff;
	width: 460px;
	padding: 10px;
}

.select-item {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
}

.radio-group {
	display: flex;
	gap: 20px;
	padding-left: 0;
}

.select-item select,
.radio-group input,
.select-item .custom-input {
	width: 100%;
}
</style>
