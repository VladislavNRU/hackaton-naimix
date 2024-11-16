<template>
	<div class="chart-container">
		<canvas ref="radarChart" width="400" height="400"></canvas>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRadarChart } from '../hooks/useRadarChart';
import { chartData, chartOptions } from '../hooks/chartData';

const { radarChart, createChart } = useRadarChart();

onMounted(() => {
	createChart(chartData, chartOptions);
});
</script>

<style scoped lang="scss">
.chart-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	background-color: #fff;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 12px;
	padding: 1rem;
	margin: 0 auto;
  border: 1px solid $primary-color;
}

canvas {
	width: 100% !important;
	height: 100% !important;
	border-radius: 8px;
}
</style>
