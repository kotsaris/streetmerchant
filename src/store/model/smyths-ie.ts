import {Store} from './store';

export const SmythsIE: Store = {
	disableAdBlocker: true,
	labels: {
		inStock: {
			container: '.homeDelivery',
			text: ['In Stock']
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
			url: 'https://www.smythstoys.com/ie/en-ie/video-games-and-tablets/playstation-5/playstation-5-consoles/playstation-5-console/p/191259'
		}
	],
	name: 'smyths-ie',
	waitUntil: 'domcontentloaded'
};
