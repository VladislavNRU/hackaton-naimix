import { ref, computed } from 'vue';

export function useRowFilter() {
	const searchQuery = ref('');
	const rows = ref<any[]>([]);

	const filteredRows = computed(() => {
		if (!searchQuery.value) return rows.value;
		const lowerCaseQuery = searchQuery.value.toLowerCase();
		return rows.value.filter(row => {
			return (
				row.id.toString().toLowerCase().includes(lowerCaseQuery) ||
				row.targetFrom.toLowerCase().includes(lowerCaseQuery) ||
				row.targetTo.toLowerCase().includes(lowerCaseQuery) ||
				row.score.toString().toLowerCase().includes(lowerCaseQuery)
			);
		});
	});

	const updateSearchQuery = (query: string) => {
		searchQuery.value = query;
	};

	const setRows = (newRows: any[]) => {
		rows.value = newRows;
	};

	return {
		filteredRows,
		searchQuery,
		updateSearchQuery,
		setRows,
	};
}
