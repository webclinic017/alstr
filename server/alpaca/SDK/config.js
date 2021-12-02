import Alpaca from "@alpacahq/alpaca-trade-api";

export const alpaca = new Alpaca({
	keyId: process.env.APCA_API_KEY_ID,
	secretKey: process.env.APCA_API_SECRET_KEY,
	paper: true,
	usePolygon: false,
});
