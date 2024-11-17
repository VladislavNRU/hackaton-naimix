<template>
	<div class="container">
		<div class="left">
			<div class="cards">
				<div class="card-container">
					<div class="card" v-for="(card, index) in cards" :key="index">
						<img :src="cardBack" alt="Card" />
						<div>{{ card }}</div>
					</div>
				</div>
			</div>
			<div class="compatibility">
				<h2>Совместимость по характеристикам</h2>
				<ul>
					<li v-for="(value, key) in compatibilityData" :key="key">
						<CharacteristicItem :name="key" :value="value" />
					</li>
				</ul>
				<div class="total">
					<h3>Итоговый процент совместимости</h3>
					<p>{{ totalCompatibility }}%</p>
				</div>
			</div>
		</div>
		<div class="right">
			<RadarChart />
		</div>
	</div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import RadarChart from '../components/RadarChart.vue';
import CharacteristicItem from '../components/CharacteristicItem.vue';
import cardBack from '@assets/images/cardBack.svg';

const compatibilityData = {
	'Профессиональные качества': 56,
	'Личностные качества': 71,
	'Психологическая совместимость': 32,
	'Рабочая среда': 94,
	'Энергетическая совместимость': 10,
};

const totalCompatibility = computed(() => {
	const sum = Object.values(compatibilityData).reduce((acc, value) => acc + value, 0);
	return (sum / Object.values(compatibilityData).length).toFixed(2);
});

const lowCompatibility = computed(() => {
	return Object.entries(compatibilityData)
		.filter(([_, value]) => value < 100)
		.map(([key, _]) => `Улучшить ${key}`);
});

const cards = ['Дурак', 'Маг', 'Жрица', 'Сила', 'Фортуна'];
</script>
<style scoped lang="scss">
.container {
	display: flex;
	justify-content: space-between;
	padding: 3rem 5rem 0 3rem;
	overflow: hidden;
}

.left {
	width: 50%;
	display: flex;
	flex-direction: column;
}

.right {
	width: 45%;
	display: flex;
	flex-direction: column;
}

.cards {
	margin: 40px 0;
}

.card-container {
	display: flex;
	justify-content: center;
	flex-direction: row;
	gap: 30px;
	flex-wrap: wrap;
	text-align: center;
}

.card img {
	width: 120px;
	object-fit: contain;
}

.compatibility {
	padding: 25px;
	border-radius: 12px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border: 1px solid $primary-color;
}

h2,
h3 {
	color: #333;
	margin-bottom: 15px;
}

.characteristic-item {
	display: flex;
	justify-content: space-between;
	padding: 15px;
	margin-bottom: 15px;
	border-radius: 12px;
	color: #fff;
	font-weight: bold;
	font-size: 18px;
	transition: all 0.3s ease;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.characteristic-item:hover {
	transform: scale(1.01);
}

.characteristic-name {
	font-size: 16px;
}

.characteristic-value {
	font-size: 18px;
}

.compatibility ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}

.total p {
	font-size: 32px;
	font-weight: bold;
	background-image: $gradient-primary;
	-webkit-background-clip: text;
	color: transparent;
}
</style>
