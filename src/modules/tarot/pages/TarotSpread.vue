<template>
	<Navbar />
	<Loader v-if="isLoading"/>
	<div class="drag-drop-container">
		<ParticipantInfo :targetTo="targetTo" :targetFrom="targetFrom" />
		<TarotResult v-if="showResult" :showResult="showResult" @close-result="showResult = false" />
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
				<TarotCard :id="card.id" :name="card.name" :isFlipped="card.isFlipped" />
			</div>
		</div>
		<div class="deck">
			<button v-if="target.length === 5" @click="showTarotResult" class="finish-button">
				Завершить расклад
			</button>
			<div
				v-else
				v-for="(card, index) in source"
				:key="card.id"
				class="card"
				draggable="true"
				@dragstart="onDragStart('source', card)"
				@dragend="onDragEnd"
				:style="getTransform(index, source.length)"
			>
				<TarotCard :id="card.id" :name="card.name" :isFlipped="false" />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import TarotCard from '@modules/tarot/components/TarotCard.vue';
import Navbar from '@modules/core/components/Navbar.vue';
import ParticipantInfo from '@modules/tarot/components/ParticipantInfo.vue';
import TarotResult from '@modules/tarot/components/TarotResult.vue';
import { useDraggable } from '@utils/useDraggable';
import { ICard } from '@modules/tarot/types/card';
import useCardRotation from '@modules/tarot/hooks/useCardRotation';
import { useTarotApi } from '../hooks/useTarotApi';
import { ref, onMounted } from 'vue';
import Loader from '@/modules/core/components/Loader.vue';

const targetTo = ref('Смолов Илья Александрович');
const targetFrom = ref('Иванов Денис Петрович');

const { source, target, onDragStart, onDrop, onDragEnd } = useDraggable<ICard>();
const { cards, loadCards, isLoading } = useTarotApi();
const { getTransform } = useCardRotation();

const flipCard = (card: ICard) => {
	card.isFlipped = !card.isFlipped;
};

const showResult = ref(false);

const showTarotResult = () => {
	showResult.value = true;
};

onMounted(async () => {
	if (!cards.value.length) {
		await loadCards();
		source.value = cards.value;
	}
});
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

.finish-button {
	position: absolute;
	bottom: 30%;
	width: 400px;
	left: 50%;
	transform: translateX(-50%);
	background-color: #77b9b8;
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	padding: 12px 24px;
	border: none;
	border-radius: 15px;
	cursor: pointer;
	transition: background-color 0.3s;
}

.finish-button:hover {
	background-color: #5e9a98;
}
</style>
