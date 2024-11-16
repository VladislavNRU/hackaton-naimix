<template>
	<div>
		<label>
			<input type="checkbox" v-model="isOpen" />
			Расклад для сотрудников
		</label>
		<transition name="fade">
			<ul class="menu" v-if="isOpen" ref="list">
				<li v-for="item in items" :key="item">{{ item }}</li>
			</ul>
		</transition>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'CollapsibleList',
	setup() {
		const isOpen = ref(false);
		// сюда пихнуть компании
		const items = ref(['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4']);

		return {
			isOpen,
			items,
		};
	},
});
</script>

<style scoped></style>
