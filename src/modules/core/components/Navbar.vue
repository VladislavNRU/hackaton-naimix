<template>
	<nav>
		<router-link to="/choose-company" @click="setSelectedTab('home')">
			<a :class="{ active: selectedTab === 'home' }">Главная</a>
		</router-link>
		<router-link to="/tarot-spread" @click="setSelectedTab('tarot')">
			<a :class="{ active: selectedTab === 'tarot' }">Расклад</a>
		</router-link>
		<router-link to="/questions" @click="setSelectedTab('question')">
			<a :class="{ active: selectedTab === 'question' }">Опросник</a>
		</router-link>
		<router-link to="/results" @click="setSelectedTab('results')">
			<a :class="{ active: selectedTab === 'results' }">Результаты</a>
		</router-link>
		<div class="animation" :class="`start-${selectedTab}`"></div>
	</nav>
</template>
<script setup>
import { ref } from 'vue';

const selectedTab = ref('home');
const setSelectedTab = tab => {
	selectedTab.value = tab;
};
</script>
<style lang="scss" scoped>
nav {
	margin-top: 1.5rem;
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 470px;
	height: 50px;
	background-color: inherit;
	border-radius: 20px;
	font-size: 0;
	z-index: 1000;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

	a {
		display: inline-block;
		position: relative;
		z-index: 1;
		line-height: 50px;
		font-size: 15px;
		color: $secondary-color;
		text-align: center;
		text-decoration: none;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.animation {
		position: absolute;
		height: 100%;
		top: 0;
		z-index: 0;
		transition: all 0.5s ease;
		border-radius: 20px;
	}

	a:nth-child(1) {
		width: 110px;
	}

	a:nth-child(2) {
		width: 110px;
	}

	a:nth-child(3) {
		width: 120px;
	}

	a:nth-child(4) {
		width: 130px;
	}

	.start-home,
	a:nth-child(1):hover ~ .animation,
	a:nth-child(1).active ~ .animation {
		width: 110px;
		left: 0;
		background-color: $primary-color;
	}

	.start-tarot,
	a:nth-child(2):hover ~ .animation,
	a:nth-child(2).active ~ .animation {
		width: 110px;
		left: 110px;
		background-color: $info-color;
	}

	.start-question,
	a:nth-child(3):hover ~ .animation,
	a:nth-child(3).active ~ .animation {
		width: 120px;
		left: 220px;
		background-color: $red-color;
	}

	.start-results,
	a:nth-child(4):hover ~ .animation,
	a:nth-child(4).active ~ .animation {
		width: 130px;
		left: 340px;
		background-color: $green-color;
	}
}
</style>
