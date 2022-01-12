const { getBars, getMultiBars } = require("./market_data/alpaca");
const getAccountInfo = require("./brokers/alpaca/paperAccount");
const dotenv = require("dotenv");
dotenv.config();

const barOptions = {
	ticker: "HOG",
	limit: 1,
	start: "2021-05-01",
	end: "2021-05-11",
	timeframe: "1Day",
};
const multiBarsOptions = {
	tickers: ["AAPL", "HOG"],
	limit: 1,
	start: "2021-05-01",
	end: "2021-05-11",
	timeframe: "1Day",
};

// getAccountInfo();
// getBars(barOptions);
getMultiBars(multiBarsOptions);
