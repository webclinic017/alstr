let Alpaca = require("@alpacahq/alpaca-trade-api");
const { key, secret, isPaper } = require("./config/alpacaEnv");
const Axios = require("axios");

class AlpacaService {
	constructor() {
		this.alpaca = new Alpaca({
			keyId: key,
			secretKey: secret,
			paper: isPaper,
		});
	}

	// ----------------------------------------------------------
	// -- ACCOUNT INFO
	// ----------------------------------------------------------
	async getAlpacaAccount() {
		try {
			const account = await this.alpaca.getAccount();
			return account;
		} catch (error) {
			return error;
		}
	}

	async getAccountConfigs() {}

	// ----------------------------------------------------------
	// -- DATA
	// ----------------------------------------------------------
	async getMinuteBars(symbol, limit, start, end) {
		let requestOptions = {
			limit: limit,
			start: start,
			end: end,
			timeframe: "1Min",
		};

		try {
			const minBars = await this.alpaca.getBarsV2(symbol, requestOptions);

			for await (let minBar of minBars) {
				console.log("MIN_BARS >>\n", minBar);
			}
		} catch (error) {
			console.log("ERROR >>\n", error);
		}
	}

	// ----------------------------------------------------------
	// -- ORDER EXECUTION
	// ----------------------------------------------------------
}

module.exports = AlpacaService;
