<template>
	<div class="drag-drop-container">
		<!-- Список источников -->
		<div class="list" @dragover.prevent @drop="onDrop('source')">
			<h3>Source</h3>
			<div
				v-for="card in source"
				:key="card.id"
				:id="card.id"
				class="card"
				draggable="true"
				@dragstart="() => onDragStart('source', card)"
			>
				<Card />
			</div>
		</div>

		<div class="list" @dragover.prevent @drop="onDrop('target')">
			<h3>Target</h3>
			<div
				v-for="card in target"
				:key="card.id"
				:id="card.id"
				class="card"
				draggable="true"
				@dragstart="() => onDragStart('target', card)"
			>
				<Card />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Card from '@modules/core/components/Card.vue';
import { useDraggable } from '@utils/useDraggable';

type Card = {
	id: string;
	name: string;
};

const { source, target, onDragStart, onDrop } = useDraggable<Card>();

source.value = [
	{ id: 'card1', name: 'Card 1' },
	{ id: 'card2', name: 'Card 2' },
];
</script>

<style scoped>
.drag-drop-container {
	display: flex;
	justify-content: space-between;
	gap: 20px;
}

.list {
	width: 200px;
	min-height: 300px;
	padding: 10px;
	border: 2px dashed #ccc;
	border-radius: 8px;
	background-color: #f9f9f9;
	position: relative;
}

.card {
	cursor: grab;
}

.card:active {
	cursor: grabbing;
	opacity: 0.8;
}
</style>
