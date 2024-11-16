<template>
	<div class="tarot-card" :class="{ flipped: isFlipped }">
		<div v-if="isFlipped">
			<img
				:src="tarot"
				:alt="`${name} front`"
				width="150"
				height="210"
				style="border-radius: 15px; border: 1px solid #000"
			/>
			<span>{{ name }}</span>
		</div>
		<img v-else :src="cardBack" :alt="`${name} back`" width="150" />
	</div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import cardBack from '@assets/images/cardBack.svg';
import tarot from '@assets/images/tarot.png';

defineProps<{
	name: string;
	frontImage: string;
	isFlipped: boolean;
}>();
</script>

<style scoped>
.tarot-card {
	position: relative;
	width: 100px;
	height: 150px;
	margin: 20px;
}

.tarot-card img {
}

.tarot-card img:hover {
	cursor: grab;
	transform: scale(1.05);
}
</style>
