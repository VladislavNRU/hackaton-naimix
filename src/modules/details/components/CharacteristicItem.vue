<!-- CharacteristicItem.vue -->
<template>
	<div class="characteristic-item" :style="{ backgroundColor: itemColor }">
		<span class="characteristic-name">{{ name }}</span>
		<span class="characteristic-value">{{ value }}%</span>
	</div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
	name: String,
	value: Number,
});

const itemColor = computed(() => {
	if (props.value >= 80) return '#39ac5f';
	if (props.value >= 50) return '#c97c46';
	return '#c94445';
});
</script>

<style scoped>
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
	transform: scale(1.05);
}

.characteristic-name {
	font-size: 16px;
}

.characteristic-value {
	font-size: 18px;
}
</style>
