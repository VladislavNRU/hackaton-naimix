import { ref } from 'vue';

export function useDraggable<T>() {
	const source = ref<T[]>([]);
	const target = ref<T[]>([]);

	const draggedItem = ref<T | null>(null);
	const draggedFrom = ref<'source' | 'target' | null>(null);

	const onDragStart = (zone: 'source' | 'target', item: T) => {
		draggedItem.value = item;
		draggedFrom.value = zone;
	};

	const onDrop = (destination: 'source' | 'target') => {
		if (!draggedItem.value || draggedFrom.value === destination) return;

		if (draggedFrom.value === 'source') {
			source.value = source.value.filter(item => item !== draggedItem.value);
		} else {
			target.value = target.value.filter(item => item !== draggedItem.value);
		}

		if (destination === 'source') {
			source.value.push(draggedItem.value);
		} else {
			target.value.push(draggedItem.value);
		}

		draggedItem.value = null;
		draggedFrom.value = null;
	};

	const onDragEnd = () => {
		draggedItem.value = null;
	};

	return {
		source,
		target,
		onDragStart,
		onDrop,
		onDragEnd
	};
}
