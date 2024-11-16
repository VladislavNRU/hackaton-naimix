<template>
	<table class="custom-table">
		<thead>
			<tr>
				<th style="width: 10%">Код</th>
				<th style="width: 25%">Цель 1</th>
				<th style="width: 25%">Цель 2</th>
				<th style="width: 12%">Совместимость</th>
			</tr>
		</thead>
	</table>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.custom-table {
  width: 100%;
	border-collapse: collapse;
	text-align: left;
	table-layout: fixed;

	thead {
		background-color: $primary-color;
		color: $white-color;

		tr {
			th {
				padding: 15px;
				font-size: 14px;
				text-align: left;
				background-color: $primary-color;
				position: sticky;
				top: 0;
				z-index: 2;
			}
		}
	}
}
</style>
