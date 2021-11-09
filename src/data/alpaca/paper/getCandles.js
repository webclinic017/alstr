import axios from 'axios';
import { dataConfigs } from './axiosConfigs.js';

export const getCandles = async () => {
	const configs = dataConfigs('GME', {
		start: '2021-02-01',
		end: '2021-02-28',
		timeframe: '1Day',
	});

	let candles;

	try {
		const res = await axios(configs);
		candles = res.data;
		console.log('BARS: ', candles);
		return candles;
	} catch (error) {
		console.log(error);
	}
};
