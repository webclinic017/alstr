export const getPaperURL = (url) => {
	return {
		method: 'get',
		baseURL: 'https://paper-api.alpaca.markets/v2',
		url: url,
		headers: {
			'APCA-API-KEY-ID': process.env.APCA_KEY,
			'APCA-API-SECRET-KEY': process.env.APCA_SECRET,
		},
	};
};

export const setParams = (url, params) => {
	return {
		method: 'get',
		baseURL: 'https://paper-api.alpaca.markets/v2',
		url: url,
		headers: {
			'APCA-API-KEY-ID': process.env.APCA_KEY,
			'APCA-API-SECRET-KEY': process.env.APCA_SECRET,
		},
		params: params,
	};
};
