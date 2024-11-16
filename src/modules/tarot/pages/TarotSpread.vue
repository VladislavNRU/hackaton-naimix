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
			>
				<Card :name="card.name" />
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
				<Card :name="card.name" />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import Card from '@modules/core/components/Card.vue';
import Navbar from '@modules/core/components/Navbar.vue';
import { useDraggable } from '@utils/useDraggable';
import { ICard } from '@modules/tarot/types/card';
import useCardRotation from '@modules/tarot/hooks/useCardRotation';

const { source, target, onDragStart, onDrop, onDragEnd } = useDraggable<ICard>();
const { getTransform } = useCardRotation();

source.value = [
	{ id: 'card1', name: 'Card 1' },
	{ id: 'card2', name: 'Card 2' },
	{ id: 'card3', name: 'Card 3' },
	{ id: 'card4', name: 'Card 4' },
	{ id: 'card5', name: 'Card 1' },
	{ id: 'card6', name: 'Card 2' },
	{ id: 'card7', name: 'Card 3' },
	{ id: 'card8', name: 'Card 4' },
	{ id: 'card9', name: 'Card 1' },
	{ id: 'card10', name: 'Card 2' },
	{ id: 'card11', name: 'Card 3' },
	{ id: 'card12', name: 'Card 4' },
	{ id: 'card13', name: 'Card 3' },
	{ id: 'card14', name: 'Card 4' },
	{ id: 'card15', name: 'Card 1' },
	{ id: 'card16', name: 'Card 2' },
	{ id: 'card17', name: 'Card 3' },
	{ id: 'card18', name: 'Card 4' },
	{ id: 'card19', name: 'Card 1' },
	{ id: 'card20', name: 'Card 2' },
	{ id: 'card21', name: 'Card 3' },
	{ id: 'card22', name: 'Card 4' },
];
</script>
<style scoped>
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

.deck .card:hover {
	cursor: grab;
	transform: scale(1.05);
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
