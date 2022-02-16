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

const AlpacaPaperAPI = new Alpaca({
  keyId: process.env.ALPACA_KEY_PAPER,
  secretKey: process.env.ALPACA_SECRET_PAPER,
  paper: true,
});

module.exports = AlpacaPaperAPI;
