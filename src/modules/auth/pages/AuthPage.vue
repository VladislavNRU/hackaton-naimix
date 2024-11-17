<template>
	<div class="container">
		<div class="wrapper">
			<div class="content">
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
			</div>
			<div class="img">
				<img src="@/assets/images/cardBack.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Button from '@modules/core/components/Button.vue';
import CustomLi from '@modules/core/components/CustomLi.vue';
</script>

<style scoped lang="scss">
.content {
	width: 286px;
}
.container {
	overflow: hidden;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.wrapper {
	width: 100%;
	padding-left: 240px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.form {
	width: 100%;
	text-align: start;
	&-form {
		display: flex;
		flex-direction: column;
	}
	&-title {
		font-size: 29px;
		margin-bottom: 10px;
	}
	&-text {
		margin-bottom: 30px;
		font-size: 12px;
	}
	&-input {
		margin-bottom: 20px;
	}
	&-btn {
		color: #fff;
		width: 100%;
		padding: 8.5px 31px;
	}
}
.img {
	height: 100vh;
	width: 100vh;
	& img {
		width: 100%;
		height: 100%;
	}
}
</style>
