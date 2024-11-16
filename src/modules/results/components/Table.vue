<template>
	<div class="table-wrapper">
		<Search v-model:searchQuery="searchQuery" />
		<div class="table-container">
			<TableHeader />
			<TableBody :rows="filteredRows" />
		</div>
	</div>
</template>
<script setup lang="ts">
import { defineProps, PropType, onMounted } from 'vue';
import TableHeader from './TableHeader.vue';
import TableBody from './TableBody.vue';
import Search from '@modules/core/components/Search.vue';
import { useRowFilter } from '../hooks/useRowFilter';

const { filteredRows, searchQuery, updateSearchQuery, setRows } = useRowFilter();
const props = defineProps({
	rows: {
		type: Array as PropType<any[]>,
		required: true,
	},
});

onMounted(() => {
	setRows(props.rows);
});
</script>
<style lang="scss" scoped>
.search-input {
	width: 100%;
	max-width: 300px;
	margin: 20px auto;
	padding: 10px;
	font-size: 14px;
	border-radius: 5px;
	border: 1px solid #ddd;
	outline: none;
}

.search-input:focus {
	border-color: $green-color;
}

.table-wrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #f8f9fa;
}

.table-container {
	width: 100%;
	max-width: 1000px;
	border-radius: 10px;
	background-color: #fff;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	overflow: hidden;
}
</style>
