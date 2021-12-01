// import axios from "axios";
// const dotenv = require("dotenv");
// dotenv.config();

// #region OG GETBARS FUNC
// export const getBarsForRange = async ({ ticker, start, end, timeframe }) => {
// export const getBarsInRange = async () => {
// 	const configs = {
// 		method: "get",
// 		baseURL: "https://data.alpaca.markets/v2",
// 		url: `/stocks/HOG/bars`,
// 		headers: {
// 			"APCA-API-KEY-ID": process.env.APCA_API_KEY_ID,
// 			"APCA-API-SECRET-KEY": process.env.APCA_API_SECRET_KEY,
// 		},
// 		params: {
// 			start: "2021-05-31",
// 			end: "2021-06-30",
// 			timeframe: "1Day",
// 		},
// 	};

// 	try {
// 		const res = await axios(configs);
// 		// return res.data.bars;
// 		console.log(res.data.bars);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
// #endregion

/**
 * ATTEMPTED SDK CODE:
 * ERROR.MISSING_API_KEY
 */
// #region
import Alpaca from "@alpacahq/alpaca-trade-api";

const alpaca = new Alpaca({
	keyId: process.env.APCA_API_KEY_ID,
	secretKey: process.env.APCA_API_SECRET_KEY,
	paper: true,
});

export const getBarsInRange = async () => {
	let bars = alpaca.getBarsV2("HOG", {
		limit: 5,
		start: "2021-05-31",
		end: "2021-06-30",
		timeframe: "1Day",
	});

	for await (let bar of bars) {
		console.log(bar);
	}
};
// #endregion

// console.log(process.env.APCA_API_SECRET_KEY);
// getBarsInRange();
