import { ChartData, ChartOptions } from 'chart.js';

export const chartData: ChartData = {
	labels: [
		'Профессиональные качества',
		'Личностные качества',
		'Психологическая совместимость',
		'Рабочая среда',
		'Энергетическая совместимость',
	],
	datasets: [
		{
			label: 'Совместимость',
			data: [56, 71, 32, 94, 10],
			backgroundColor: [
				'rgba(218, 232, 232, 0.6)',
				'rgba(241, 83, 48, 0.6)',
				'rgba(255, 153, 41, 0.6)',
				'rgba(119, 184, 185, 0.6)',
				'rgba(119, 184, 185, 0.6)',
			],
			borderColor: ['#ff9929', '#ff9929', '#ff9929', '#ff9929', '#ff9929'],
			borderWidth: 2,
			pointBackgroundColor: 'white',
			pointBorderColor: [
				'#9400D3',
				'#DB7093',
				'#9ACD32',
				'#B0C4DE',
				'#17a2b8',
			],
			pointHoverBackgroundColor: 'rgba(255, 255, 255, 0.8)',
			pointHoverBorderColor: '#333',
			pointRadius: 6,
			pointHoverRadius: 8,
		},
	],
};

export const chartOptions: ChartOptions = {
	responsive: true,
	scales: {
		r: {
			min: 0,
			max: 100,
			ticks: {
				stepSize: 20,
				font: {
					size: 12,
					weight: 'bold',
				},
				color: '#333',
			},
			pointLabels: {
				font: {
					size: 12,
				},
				color: '#333',
			},
		},
	},
	plugins: {
		legend: {
			position: 'top',
			labels: {
				font: {
					size: 14,
					weight: 'bold',
				},
			},
		},
		tooltip: {
			backgroundColor: 'rgba(0, 0, 0, 0.7)',
			titleColor: '#fff',
			bodyColor: '#fff',
			borderColor: '#fff',
			borderWidth: 1,
			cornerRadius: 3,
		},
	},
};
