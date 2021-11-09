// https://alpaca.markets/docs/api-documentation/api-v2/account/
import axios from 'axios';
import { paperGetURL } from '../configs.js';

export const getAccount = async () => {
	const configs = paperGetURL('/account');

	try {
		const res = await axios(configs);

		const {
			status,
			currency,
			buying_power,
			cash,
			portfoloio_value,
			created_at,
			shorting_enabled,
		} = res.data;

		const filteredRes = {
			status,
			currency,
			buying_power,
			cash,
			portfoloio_value,
			created_at,
			shorting_enabled,
		};

		console.log(filteredRes);
	} catch (error) {
		console.log(error);
	}
};
