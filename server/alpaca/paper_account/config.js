const Alpaca = require("@alpacahq/alpaca-trade-api");

const alpaca = new Alpaca({
	keyId: process.env.APCA_KEY_PAPER,
	secretKey: process.env.APCA_SECRET_PAPER,
	paper: true,
	usePolygon: false,
});

module.exports = alpaca;
