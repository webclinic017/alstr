const Alpaca = require("@alpacahq/alpaca-trade-api");

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

const AlpacaLiveAPI = new Alpaca({
  keyId: process.env.ALPACA_KEY_LIVE,
  secretKey: process.env.ALPACA_SECRET_LIVE,
  paper: false,
});

module.exports = AlpacaLiveAPI;
