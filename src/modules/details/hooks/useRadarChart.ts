// useRadarChart.ts
import { ref } from 'vue';
import {
	Chart,
	RadarController,
	Title,
	Tooltip,
	Legend,
	RadialLinearScale,
	PointElement,
	LineElement,
	CategoryScale,
	LinearScale,
	ArcElement,
  ChartData,
  ChartOptions,
} from 'chart.js';

// Регистрация необходимых компонентов для Chart.js
Chart.register(
	RadarController,
	Title,
	Tooltip,
	Legend,
	RadialLinearScale,
	PointElement,
	LineElement,
	CategoryScale,
	LinearScale,
	ArcElement
);

export function useRadarChart() {
	const radarChart = ref<HTMLCanvasElement | null>(null);

	const createChart = (chartData: ChartData, chartOptions: ChartOptions) => {
		if (radarChart.value) {
			new Chart(radarChart.value, {
				type: 'radar',
				data: chartData,
				options: chartOptions as any,
			});
		}
	};

	return { radarChart, createChart };
}
