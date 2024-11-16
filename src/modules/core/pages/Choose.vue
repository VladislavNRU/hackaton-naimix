<template>
	<Navbar />
	<div class="logo">
		<Logo />
	</div>
	<div class="container">
		<div class="content">
			<h1 class="choose-title">Выберите компанию</h1>
			<Input class="input-custom" />
			<CompanyCard name="Газпром" logo="" class="company-card" />
			<DropdownCheckbox :isOpen="isOpen" class="checkbox" />
			<CustomButton class="button-second" type="button" priority="find" text="Найти" />
		</div>
	</div>
</template>

<script setup lang="ts">
import CustomButton from '@modules/core/components/Button.vue';

import DropdownCheckbox from '@modules/core/components/Checkbox.vue';
import CompanyCard from '@modules/core/components/CompanyCard.vue';
import Input from '@modules/core/components/Input.vue';
import Logo from '@modules/core/components/Logo.vue';
import Navbar from '@modules/core/components/Navbar.vue';
const isOpen = false;
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
}

.content {
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 130px 0;
	width: 460px;
	margin: 0 auto;
}
.choose-title {
	font-weight: 600;
	line-height: 48px;
	font-size: 40px;
}
.input-custom {
	width: 100%;
}
.checkbox {
	width: 100%;
}
.company-card {
	margin-bottom: 50px;
}
.button-second {
	margin-top: 100px;
	color: #fff;
	width: 100%;
	padding: 10px;
}
.button-second.open {
	color: aqua;
}
</style>
