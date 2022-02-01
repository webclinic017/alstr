require("dotenv").config();
const AlpacaService = require("./services/AlpacaService.ts");

const AlpacaApi = new AlpacaService();

const alpacaAccount = async () => {
	const account = await AlpacaApi.getAlpacaAccount();
	console.log(account);
};

alpacaAccount();
