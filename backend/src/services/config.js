const { AlpacaClient } = require("@alpacahq/alpaca-trade-api");
const { key, secret, isPaper } = require("./env");

const alpacaApi = new AlpacaClient({
	credentials: {
		keyId: key,
		secretKey: secret,
		paper: isPaper,
	},
});

module.exports = alpacaApi;
