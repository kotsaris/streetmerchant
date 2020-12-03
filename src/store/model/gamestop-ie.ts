import {Store} from './store';

export const GamestopIE: Store = {
	disableAdBlocker: true,
	labels: {
		inStock: {
			container: '#btnAddToCart',
			text: ['Add to Cart']
		},
		outOfStock: {
			container: '.instoreMessage',
			text: ['Out of Stock']
		}
	},
	links: [
		{
			brand: 'sony',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.gamestop.ie/PlayStation%205/Games/74894/dualsense-wireless-controller'
		}
	],
	name: 'gamestop-ie',
	waitUntil: 'domcontentloaded'
};
