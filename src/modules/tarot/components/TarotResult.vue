<template>
	<div v-if="showResult" class="blur-overlay">
		<div class="result-container">
			<button class="close-button" @click="closeResult">×</button>
			<div class="result-content">
				<h3>Результат расклада</h3>
				<p>Ваша совместимость: 70%</p>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
defineProps<{ showResult: boolean }>();
const emit = defineEmits<{ (e: 'close-result'): void }>();

const closeResult = () => {
	emit('close-result');
};
</script>
<style scoped lang="scss">
.blur-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99999;
}

.result-container {
	opacity: 0;
	transform: scale(0);
	animation: popIn 0.5s forwards ease-out;
	position: relative;
}

@keyframes popIn {
	0% {
		opacity: 0;
		transform: scale(0);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
}

.result-content {
	background-color: #fff;
	border-radius: 8px;
	padding: 20px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	width: 300px;
	margin: 20px auto;
	text-align: center;
	z-index: 9999999;
}

.result-content h3 {
	font-size: 24px;
	color: #333;
}

.result-content p {
	font-size: 18px;
	color: #555;
}

.close-button {
	position: absolute;
	top: 25px;
	right: 10px;
	font-size: 24px;
	background: none;
	border: none;
	color: #333;
	cursor: pointer;
	transition: color 0.3s;
}

.close-button:hover {
	color: $primary-color;
}
</style>
