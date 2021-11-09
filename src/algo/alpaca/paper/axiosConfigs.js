// ------------------------------------------------
// FUNC PARAMS: paper-api endpoint PATH
// - path: gets appended to [baseURL] via [url] prop
// RETURNS: Axios request config object with FULL URL
// ------------------------------------------------
export const apiConfigs = (path) => {
	return {
		method: 'get',
		baseURL: 'https://paper-api.alpaca.markets/v2',
		url: `/${path}`,
		headers: {
			'APCA-API-KEY-ID': process.env.APCA_KEY,
			'APCA-API-SECRET-KEY': process.env.APCA_SECRET,
		},
	};
};
// ------------------------------------------------
// FUNC PARAMS: ticker path, bar query params
// - path: ticker
// - params:
// -- start:
// -- end:
// -- limit:
// -- page_token:
// -- timeframe:
// -- adjustment:
// RETURNS: Axios request configs object with FULL URL
// ------------------------------------------------
// NOTE: free account only has access to IEX (Investor's Exchange)
// ------------------------------------------------
export const dataConfigs = (ticker, barParams) => {
	return {
		method: 'get',
		baseURL: 'https://data.alpaca.markets/v2',
		url: `/stocks/${ticker}/bars`,
		headers: {
			'APCA-API-KEY-ID': process.env.APCA_KEY,
			'APCA-API-SECRET-KEY': process.env.APCA_SECRET,
		},
		params: barParams,
	};
};
