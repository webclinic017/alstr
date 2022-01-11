const Alpaca = require("@alpacahq/alpaca-trade-api");

const alpaca = new Alpaca({
	keyId: process.env.APCA_API_KEY_ID,
	secretKey: process.env.APCA_API_SECRET_KEY,
	paper: true,
	usePolygon: false,
});

module.exports = alpaca;
