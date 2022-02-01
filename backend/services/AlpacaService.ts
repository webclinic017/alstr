let Alpaca = require("@alpacahq/alpaca-trade-api");
const { key, secret, isPaper } = require("./config/env");

class AlpacaService {
	constructor() {
		this.alpaca = new Alpaca({
			keyId: key,
			secretKey: secret,
			paper: isPaper,
		});
	}

	async getAlpacaAccount() {
		try {
			const alpacaAccount = await this.alpaca.getAccount();
			return alpacaAccount;
		} catch (error) {
			return error;
		}
	}
}

module.exports = AlpacaService;
