const Alpaca = require("@alpacahq/alpaca-trade-api");
const { key, secret, isPaper } = require("../env");

const alpacaAPI = new Alpaca({
	keyId: key,
	secretKey: secret,
	paper: isPaper,
});

module.exports = alpacaAPI;
