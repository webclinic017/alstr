// ------------------------------------------------
// PARAMS: paper-api endpoint path
// RETURNS: Axios request configs
// ------------------------------------------------
export const paperGetURL = (path) => {
	return {
		method: 'get',
		baseURL: 'https://paper-api.alpaca.markets/v2',
		url: path,
		headers: {
			'APCA-API-KEY-ID': process.env.APCA_KEY,
			'APCA-API-SECRET-KEY': process.env.APCA_SECRET,
		},
	};
};
// ------------------------------------------------
// PARAMS: paper-api endpoint path
// RETURNS: Axios request configs
// ------------------------------------------------
// TODO: consolidate into 1 'paperGET' func using OPTIONAL params
// ------------------------------------------------
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
