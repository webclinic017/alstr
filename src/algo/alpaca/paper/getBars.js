import axios from 'axios';
import { dataConfigs } from './axiosConfigs.js';

export const getBars = async () => {
	const configs = dataConfigs('GME', {
		start: '2021-02-01',
		end: '2021-02-28',
		timeframe: '1Day',
	});

	try {
		const res = await axios(configs);
		return res.data.bars;
	} catch (error) {
		console.log(error);
	}
};
