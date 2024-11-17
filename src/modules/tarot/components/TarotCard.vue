<template>
	<div class="tarot-card" :class="{ flipped: isFlipped }">
		<div v-if="isFlipped">
			<img
				:src="frontImage"
				:alt="`${name} front`"
				width="148"
				height="208"
				style="border-radius: 15px; border: 1px solid #000"
			/>
			<span>{{ name }}</span>
		</div>
		<img v-else :src="cardBack" :alt="`${name} back`" width="150" />
	</div>
</template>
<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';
import cardBack from '@assets/images/cardBack.svg';
import { tarotGlob } from '../types/types';

const props = defineProps<{
	id: number;
	name: string;
	isFlipped: boolean;
}>();

const tarotImages = import.meta.glob('@/assets/images/tarot/*.png') as tarotGlob;

const frontImage = ref<string>('');
onMounted(async () => {
	const imagePath = `/src/assets/images/tarot/${props.id - 1}.png`;
	if (tarotImages[imagePath]) {
		frontImage.value = await tarotImages[imagePath]().then(module => module.default);
	}
});
</script>
<style scoped lang="scss">
.tarot-card {
	position: relative;
	width: 100px;
	height: 150px;
	margin: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.tarot-card img:hover {
	cursor: grab;
	transform: scale(1.05);
}
</style>
