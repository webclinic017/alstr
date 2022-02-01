require("dotenv").config();
const AlpacaService = require("./market-data/services/AlpacaAccount.ts");

const AlpacaApi = new AlpacaService();

const alpacaAccount = async () => {
	const account = await AlpacaApi.getAlpacaAccount();
	console.log(account);
};
const minBars = async () => {
	const bars = await AlpacaApi.getMinuteBars("HOG", {
		limit: 10,
		start: "2021-12-01",
		end: "2021-12-02",
	});
};

// alpacaAccount();
minBars();
