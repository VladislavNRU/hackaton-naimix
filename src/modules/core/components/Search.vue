<template>
	<div class="search-wrapper">
		<input v-model="searchQuery" class="search-input" type="text" placeholder="Поиск" />
		<button v-if="searchQuery" class="clear-btn" @click="clearSearch" aria-label="Очистить поиск">
			<img src="@/assets/images/clear.svg" alt="Clear Icon" class="clear-icon" />
		</button>
		<img src="@/assets/images/search.svg" alt="Search Icon" class="search-icon" />
	</div>
</template>
<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits<{
	(event: 'update:searchQuery', value: string): void;
}>();

const searchQuery = ref('');

const clearSearch = () => {
	searchQuery.value = '';
	emit('update:searchQuery', '');
};
</script>
<style lang="scss" scoped>
.search-wrapper {
	position: relative;
	width: 100%;
	max-width: 300px;
	margin: 20px auto;
}

.search-input {
	width: 100%;
	padding: 10px 40px 10px 40px;
	font-size: 14px;
	border-radius: 15px;
	border: 1px solid #ddd;
	outline: none;
}

.search-input:focus {
	border-color: $primary-color;
}

.search-icon,
.clear-btn {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}

.search-icon {
	left: 10px;
	color: #aaa;
}

.clear-btn {
	right: -80px;
	top: 20px;
	background: none;
	border: none;
	color: #aaa;
	cursor: pointer;
}

.clear-btn:hover {
	color: $primary-color;
}
</style>
