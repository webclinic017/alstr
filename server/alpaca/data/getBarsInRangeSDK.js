import { alpaca } from "../paper_account/config";

export const getBarsInRangeSDK = options => {
	let bars;
	try {
		bars = alpaca.getBarsV2(options.ticker, {
			limit: options.limit,
			start: options.start,
			end: options.end,
			timeframe: options.timeframe,
		});

		return bars;
	} catch (err) {
		console.log(err);
	}

	// for await (let bar of bars) {
	// 	console.log(bar);
	// }
};
