<template>
	<div class="table-body-container">
		<table class="custom-table">
			<tbody>
				<tr v-for="row in rows" :key="row.id" :class="{ 'row-active': row.status === 'Active' }">
					<td style="width: 10%">{{ row.id }}</td>
					<td style="width: 25%">{{ row.targetFrom }}</td>
					<td style="width: 25%">{{ row.targetTo }}</td>
					<td style="width: 12%; text-align: center">{{ row.score }}%</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
	rows: {
		type: Array<any>,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
.table-body-container {
	max-height: 400px;
	overflow-y: auto;
}

.custom-table {
	width: 100%;
	border-collapse: collapse;
	text-align: left;
	table-layout: fixed;

	tbody {
		tr {
			border-bottom: 1px solid #ddd;
			transition: background-color 0.3s ease;

			&:hover {
				background-color: #f1f1f1;
			}

			&.row-active {
				background-color: $light-green-color;
			}

			td {
				padding: 15px;
				font-size: 14px;
			}
		}
	}
}
</style>
