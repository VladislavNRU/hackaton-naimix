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
} from 'chart.js';

export function registerChartComponents() {
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
}
