let Alpaca = require("@alpacahq/alpaca-trade-api");
const { key, secret, isPaper } = require("./config/paper_or_live");
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
	// -- ACCOUNT
	// ----------------------------------------------------------
	async getAlpacaAccount() {
		try {
			const account = await this.alpaca.getAccount();
			return account;
		} catch (error) {
			return error;
		}
	}

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
		let axiosConfig = {
			baseURL: "https://data.alpaca.markets",
			url: `/v2/stocks/${symbol}/bars`,
			params: {
				start: start,
				end: end,
				limit: limit,
				timeframe: "1Min",
			},
			// ,
			// headers: {
			// 	"APCA-API-KEY-ID": process.env.APCA_KEY_PAPER,
			// 	"APCA-API-SECRET-KEY": process.env.APCA_SECRET_PAPER,
			// },
		};

		try {
			const minBars = await this.alpaca.getBarsV2(symbol, requestOptions);

			// for await (let minBar of minBars) {
			// 	console.log("MIN_BARS >>\n", minBar);
			// }
			console.log(minBars);
			// const raw = await Axios(axiosConfig);
			// const res = raw.data;

			// console.log(raw.data);
		} catch (error) {
			console.log("ERROR >>\n", error);
		}
	}
}

module.exports = AlpacaService;
