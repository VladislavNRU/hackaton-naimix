<template>
	<div class="container">
		<div class="wrapper">
			<div class="form">
				<form class="form-form" action="">
					<h1 class="form-title">Добро пожаловать</h1>
					<p class="form-text">Добро пожаловать! Пожалуйста, введите свои данные</p>
					<CustomLi label="E-mail" class="form-input" />
					<CustomLi label="Телефон" class="form-input" />
					<CustomLi label="ФИО" class="form-input" />
					<Button class="form-btn" type="submit" priority="find" text="Войти" />
				</form>
			</div>
			<div class="img">
				<img src="@/assets/images/test.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Button from '@modules/core/components/Button.vue';
import CustomLi from '@modules/core/components/CustomLi.vue';
</script>

<style scoped lang="scss">
.container {
	margin-top: 10%;
	overflow: hidden;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.wrapper {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
}

.form {
	width: 310px;
	text-align: start;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
}

.form-form {
	width: 100%;
}

.form-title {
	font-size: 29px;
	margin-bottom: 10px;
}

.form-text {
	width: 100%;
	margin-bottom: 30px;
	font-size: 12px;
}

.form-input {
	margin-bottom: 20px;
}

.form-btn {
	color: #fff;
	width: 400px;
	padding: 8.5px 31px;
}

.img {
	width: 50%;
	height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
	& img {
		width: 100%;
		height: 100%;
		object-fit: contain; /* Сохраняет пропорции изображения */
	}
}
</style>
