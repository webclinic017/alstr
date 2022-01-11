import axios from "axios";

// export const getBarsForRange = async ({ ticker, start, end, timeframe }) => {
export const getBars = async (ticker, rangeAsArr) => {
	const configs = {
		method: "get",
		baseURL: "https://data.alpaca.markets/v2",
		url: `/stocks/${ticker}/bars`,
		headers: {
			"APCA-API-KEY-ID": process.env.APCA_API_KEY_ID,
			"APCA-API-SECRET-KEY": process.env.APCA_API_SECRET_KEY,
		},
		params: {
			start: "2021-05-31",
			end: "2021-06-14",
			timeframe: "1Day",
		},
	};

	try {
		const res = await axios(configs);
		return res.data.bars;
		// console.log(res.data.bars);
	} catch (error) {
		console.log(error);
	}
};
