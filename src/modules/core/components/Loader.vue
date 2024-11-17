<template>
	<div class="global-loader">
		<div class="loader"></div>
	</div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.global-loader {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(255, 255, 255, 0.9);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
}

.loader {
	border: 4px solid #e2e1e1;
	border-top: 4px solid $primary-color;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	animation: spin 2s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
