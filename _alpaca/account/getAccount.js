// https://alpaca.markets/docs/api-documentation/api-v2/account/
import axios from 'axios';
import { getPaperURL } from '../configs.js';

export const getAccount = async () => {
	const configs = getPaperURL('/account');
	try {
		const res = await axios(configs);
		console.log(res);
	} catch (error) {
		console.log(error);
	}
};
