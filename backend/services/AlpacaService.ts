let Alpaca = require("@alpacahq/alpaca-trade-api");
const { key, secret, isPaper } = require("./config/paper_or_live");

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
			const account = await this.alpaca.getAccount();
			return account;
		} catch (error) {
			return error;
		}
	}
}

module.exports = AlpacaService;
