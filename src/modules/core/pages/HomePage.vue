<template>
	<div class="logo">
		<Logo />
	</div>
	<div class="container">
		<div class="content">
			<h1 class="title">The Card Diviner</h1>
			<span class="description">
				Подберите идеальную команду или кандидата для вашей компании с помощью нашего уникального инструмента чтения
				карт
			</span>
			<button class="start-button" @click="router.push('/tarot-spread')">Начать гадание</button>
		</div>
		<CardLayout />
	</div>
</template>
<script setup lang="ts">
import CardLayout from '@modules/core/components/CardLayout.vue';
import Logo from '@modules/core/components/Logo.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<style scoped lang="scss">
.container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
}

.title {
	font-size: 8rem;
	font-weight: bold;
	background-image: $gradient-primary;
	-webkit-background-clip: text;
	color: transparent;
	display: inline;
}

.description {
	font-size: 1.3rem;
	margin-bottom: 40px;
	max-width: 750px;
	color: #353535;
}

.content {
	text-align: center;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.start-button {
	padding: 10px 20px;
	font-size: 1.2rem;
	cursor: pointer;
	background-image: $gradient-primary;
	color: $white-color;
	border: none;
	border-radius: 20px;
	transition: background-color 0.3s;
	margin-bottom: 160px; // TODO: Костыль
}
</style>
