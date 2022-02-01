require("dotenv").config();
const AlpacaService = require("./services/AlpacaService.ts");

const AlpacaApi = new AlpacaService();

const alpacaAccount = async () => {
	const account = await AlpacaApi.getAlpacaAccount();
	console.log(account);
};
const minBars = async () => {
	const bars = await AlpacaApi.getMinuteBars(
		"HOG",
		10,
		"2021-12-01",
		"2021-12-02"
	);
};

// alpacaAccount();
minBars();
