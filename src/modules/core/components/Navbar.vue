<template>
	<nav>
		<a href="#/" :class="{ active: selectedTab === 'home' }" @click="setSelectedTab('home')">Главная</a>
		<a href="#/tarot-spread" :class="{ active: selectedTab === 'tarot' }" @click="setSelectedTab('tarot')">Расклад</a>
		<a href="#/" :class="{ active: selectedTab === 'favorite' }" @click="setSelectedTab('favorite')">Избранное</a>
		<a href="#/" :class="{ active: selectedTab === 'results' }" @click="setSelectedTab('results')">Результаты</a>
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
<style lang="scss">
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
}

nav a {
	line-height: 50px;
	font-size: 15px;
	display: inline-block;
	position: relative;
	z-index: 1;
	color: $secondary-color;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
	transition: all 0.3s ease;
}

nav .animation {
	position: absolute;
	height: 100%;
	top: 0;
	z-index: 0;
	transition: all 0.5s ease 0s;
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

nav .start-home,
a:nth-child(1):hover ~ .animation,
a:nth-child(1).active ~ .animation {
	width: 110px;
	left: 0;
	background-color: $primary-color;
}

nav .start-tarot,
a:nth-child(2):hover ~ .animation,
a:nth-child(2).active ~ .animation {
	width: 110px;
	left: 110px;
	background-color: $info-color;
}

nav .start-favorite,
a:nth-child(3):hover ~ .animation,
a:nth-child(3).active ~ .animation {
	width: 120px;
	left: 220px;
	background-color: $red-color;
}

nav .start-results,
a:nth-child(4):hover ~ .animation,
a:nth-child(4).active ~ .animation {
	width: 130px;
	left: 340px;
	background-color: $green-color;
}
</style>
