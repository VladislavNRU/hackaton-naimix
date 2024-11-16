<template>
	<div class="page-container">
		<div class="card">
			<img :src="cardLayout" alt="Card Back" />
		</div>
	</div>
</template>

<script setup lang="ts">
import cardLayout from '../../../assets/images/cardLayout.png';
</script>

<style scoped>
.page-container {
	position: relative;
}

img {
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	user-select: none;
	pointer-events: none;
}
</style>
