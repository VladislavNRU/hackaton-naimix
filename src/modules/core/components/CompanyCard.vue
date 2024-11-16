<template>
	<div class="company-selector">
		<label v-for="company in companies" :key="company.id" class="company-item">
			<img :src="company.logo" alt="Company Logo" class="company-logo" />
			<span class="company-name">{{ company.name }}</span>
			<div class="company-custom-input">
				<input
					type="radio"
					:value="company.id"
					v-model="selectedCompany"
					name="company"
					class="company-custom-item"
					@change="onCompanyChange"
				/>
				<label for="company"></label>
			</div>
		</label>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import logoGaz from '../../../assets/images/Logo-g.png';

interface Company {
	id: number;
	name: string;
	logo: string;
}

const selectedCompany = ref<number | null>(null);
const companies = ref<Company[]>([
	{
		id: 1,
		name: 'Газпром',
		logo: logoGaz,
	},
	{
		id: 2,
		name: 'Газпром',
		logo: logoGaz,
	},
]);

function onCompanyChange() {
	console.log('Выбрана компания с ID:', selectedCompany.value);
	// Здесь можно добавить логику для сохранения выбранного значения
}
</script>

<style scoped lang="scss">
.company-selector {
	display: flex;
	flex-direction: column;
}

.company {
	&-selector {
		margin-top: 50px;
		width: 100%;
	}
	&-item {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}
	&-logo {
		width: 50px;
		height: 50px;
		margin-right: 15px;
	}
	&-name {
		flex-grow: 1;
		margin-right: 255px;
	}
	&-custom {
		&-input {
			width: 20px;
			height: 20px;
			& input[type='radio'] {
				display: none;
			}
			& label {
				display: inline-block;
				cursor: pointer;
				position: relative;
				padding-left: 25px;
				margin-right: 0;
				line-height: 18px;
				user-select: none;
				&:before {
					content: '';
					display: inline-block;
					width: 20px;
					height: 20px;
					position: absolute;
					left: 0;
					bottom: -5px;
					transition: all 0.3s ease;
					background: url('../../../assets/images/notactive.svg') 0 0 no-repeat;
				}
			}
			& input[type='radio']:checked + label:before {
				transition: all 0.3s ease;

				background: url('../../../assets/images/active.svg') 0 0 no-repeat;
			}
		}
	}
}
.company img {
	width: 50px;
	height: 50px;
}
</style>
