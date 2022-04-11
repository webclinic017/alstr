const { AlpacaClient } = require("@alpacahq/alpaca-trade-api");
const { key, secret, isPaper } = require("../env");

/** AVAILABLE PROPERTIES:
 *
 * baseUrl (account)
 * dataBaseUrl (historical data)
 * dataStreamUrl (websocket)
 * keyId
 * secretKey
 * apiVersion
 * oauth
 * feed: stream source (free: 'iex', pro: 'sip')
 * verbose
 * exchanges: comma-separated string || list of strings
 *
 */

const account_paper = new AlpacaClient({
	credentials: {
		keyId: key,
		secretKey: secret,
		paper: true,
	},
});

const account_live = new Alpaca({
	keyId: process.env.ALPACA_KEY_LIVE,
	secretKey: process.env.ALPACA_SECRET_LIVE,
	paper: false,
});

const historical_data = new Alpaca({
	keyId: KEY,
	secretKey: SECRET,
	dataBaseUrl,
});

const stream_free = new Alpaca({
	keyId: process.env.ALPACA_KEY_PAPER,
	secretKey: process.env.ALPACA_SECRET_PAPER,
	dataBaseUrl: ALPACA_STREAM_FREE,
});

const stream_pro = new Alpaca({
	keyId: process.env.ALPACA_KEY_PAPER,
	secretKey: process.env.ALPACA_SECRET_PAPER,
	dataBaseUrl: ALPACA_STREAM_PRO,
});

module.exports.alpacaService = {
	account_paper,
	account_live,
	historical_data,
	stream_free,
	stream_pro,
};
