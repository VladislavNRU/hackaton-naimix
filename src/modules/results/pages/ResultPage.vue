<template>
	<Navbar />
	<Table :rows="tableData" />
</template>
<script setup lang="ts">
import Navbar from '@/modules/core/components/Navbar.vue';
import Table from '@modules/results/components/Table.vue';
interface TableRow {
	id: number;
	targetTo: string;
	targetFrom: string;
	score: number;
}

const tableData: TableRow[] = [
	{
		id: 1,
		targetTo: 'Иванов Алексей Владимирович',
		targetFrom: 'Смирнов Дмитрий Сергеевич',
		score: 70,
	},
	{ id: 2, targetTo: 'Дегтярев Алексей Владимирович', targetFrom: 'Газпром', score: 50 },
	{
		id: 3,
		targetTo: 'Кузнецова Ольга Сергеевна',
		targetFrom: 'Беляева Анастасия Андреевна',
		score: 30,
	},
	{
		id: 4,
		targetTo: 'Иванов Алексей Владимирович',
		targetFrom: 'Смирнов Дмитрий Сергеевич',
		score: 70,
	},
	{ id: 5, targetTo: 'Дегтярев Алексей Владимирович', targetFrom: 'Газпром', score: 50 },
	{
		id: 6,
		targetTo: 'Кузнецова Ольга Сергеевна',
		targetFrom: 'Беляева Анастасия Андреевна',
		score: 30,
	},
	{
		id: 7,
		targetTo: 'Иванов Алексей Владимирович',
		targetFrom: 'Смирнов Дмитрий Сергеевич',
		score: 70,
	},
	{ id: 8, targetTo: 'Дегтярев Алексей Владимирович', targetFrom: 'Газпром', score: 50 },
	{
		id: 9,
		targetTo: 'Кузнецова Ольга Сергеевна',
		targetFrom: 'Беляева Анастасия Андреевна',
		score: 30,
	},
	{
		id: 3,
		targetTo: 'Кузнецова Ольга Сергеевна',
		targetFrom: 'Беляева Анастасия Андреевна',
		score: 30,
	},
	{
		id: 4,
		targetTo: 'Иванов Алексей Владимирович',
		targetFrom: 'Смирнов Дмитрий Сергеевич',
		score: 70,
	},
	{ id: 5, targetTo: 'Дегтярев Алексей Владимирович', targetFrom: 'Газпром', score: 50 },
	{
		id: 6,
		targetTo: 'Кузнецова Ольга Сергеевна',
		targetFrom: 'Беляева Анастасия Андреевна',
		score: 30,
	},
	{
		id: 7,
		targetTo: 'Иванов Алексей Владимирович',
		targetFrom: 'Смирнов Дмитрий Сергеевич',
		score: 70,
	},
	{ id: 8, targetTo: 'Дегтярев Алексей Владимирович', targetFrom: 'Газпром', score: 50 },
	{
		id: 9,
		targetTo: 'Кузнецова Ольга Сергеевна',
		targetFrom: 'Беляева Анастасия Андреевна',
		score: 30,
	},
];
</script>
