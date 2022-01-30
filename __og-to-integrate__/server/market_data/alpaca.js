const alpaca = require("../brokers/alpaca/config.paper");

exports.getBars = async options => {
	const { ticker, limit, start, end, timeframe } = options;
	try {
		const res = await alpaca.getBarsV2(ticker, {
			limit,
			start,
			end,
			timeframe,
		});

		console.clear();
		console.log(">>>>>>>>>> GET BARS >>>>>>>>>>");

		for await (b of res) {
			// console.log(Object.keys(b));
			console.log(">> BAR >>");
			console.log(b);
		}
	} catch (error) {
		console.log(error);
	}
};

// * doesn't limit to passed 'limit' value
exports.getMultiBars = async options => {
	const { tickers, limit, start, end, timeframe } = options;
	try {
		const res = await alpaca.getMultiBarsV2([...tickers], {
			limit,
			start,
			end,
			timeframe,
		});

		console.clear();
		console.log(">>>>>>>>>> GET MULTI BARS >>>>>>>>>>");
		console.log(await res);
	} catch (error) {
		console.log(error);
	}
};
