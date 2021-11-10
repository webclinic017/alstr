import axios from 'axios';

export const getAccount = async () => {
	const configs = {
		method: 'get',
		baseURL: 'https://paper-api.alpaca.markets/v2',
		url: `/${path}`,
		headers: {
			'APCA-API-KEY-ID': process.env.APCA_KEY,
			'APCA-API-SECRET-KEY': process.env.APCA_SECRET,
		},
	};

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
