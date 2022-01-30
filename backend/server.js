const alpacaAPI = require("./services/brokers/alpaca-api");
const dotenv = require("dotenv");
dotenv.config();

const test = async () => {
	const account = await alpacaAPI.getAccount();
	console.log(account);
};
test();
