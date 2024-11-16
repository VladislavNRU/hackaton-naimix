<template>
	<Navbar />
	<div class="drag-drop-container">
		<div class="info">
			<p><strong>For:</strong>Company name</p>
			<p><strong>Reader:</strong>User name</p>
		</div>
		<div class="drop-zone" @dragover.prevent @drop="onDrop('target')">
			<div
				v-for="card in target"
				:key="card.id"
				class="card centered-card"
				draggable="true"
				@dragstart="onDragStart('target', card)"
				@dragend="onDragEnd"
				@click="flipCard(card)"
				:class="{ flipped: card.isFlipped }"
			>
				<TarotCard :name="card.name" :isFlipped="card.isFlipped" :frontImage="card.frontImage" />
			</div>
		</div>

		<div class="deck">
			<div
				v-for="(card, index) in source"
				:key="card.id"
				class="card"
				draggable="true"
				@dragstart="onDragStart('source', card)"
				@dragend="onDragEnd"
				:style="getTransform(index, source.length)"
			>
				<TarotCard :name="card.name" :isFlipped="false" :frontImage="card.frontImage" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import TarotCard from '@modules/tarot/components/TarotCard.vue';
import Navbar from '@modules/core/components/Navbar.vue';
import { useDraggable } from '@utils/useDraggable';
import { ICard } from '@modules/tarot/types/card';
import useCardRotation from '@modules/tarot/hooks/useCardRotation';
import { useTarotApi } from '../hooks/useTarotApi';

const { source, target, onDragStart, onDrop, onDragEnd } = useDraggable<ICard>();
const { generateCards } = useTarotApi();
source.value = generateCards();

const { getTransform } = useCardRotation();

const flipCard = (card: ICard) => {
	card.isFlipped = !card.isFlipped;
};
</script>
<style scoped lang="scss">
.drag-drop-container {
	display: flex;
	flex-direction: column-reverse;
	height: 100vh;
	position: relative;
	overflow: hidden;
	justify-content: center;
}

.deck {
	width: 140px;
	height: 200px;
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.deck .card {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	transform-origin: 50% 300%;
	transition: transform 0.3s ease;
}

.drop-zone {
	height: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(11, 101, 101, 15%);
	border: 2px dashed #0b6565;
	border-radius: 20px;
	margin: 4rem;
	position: relative;
	flex-wrap: nowrap;
	overflow-x: auto;
	max-height: 80vh;
}

.centered-card {
	cursor: grab;
	transition:
		transform 0.2s ease,
		opacity 0.2s ease;
	margin-right: 20px;
}

.centered-card:active {
	cursor: grabbing;
	opacity: 0.8;
	transform: scale(1.02);
}

.info {
	margin-left: 4rem;
}
</style>
