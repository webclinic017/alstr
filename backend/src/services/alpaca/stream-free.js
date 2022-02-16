const Alpaca = require("@alpacahq/alpaca-trade-api");
const { ALPACA_STREAM_FREE } = require("../../constants/urls");

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

const AlpacaFreeStream = new Alpaca({
  keyId: process.env.ALPACA_KEY_PAPER,
  secretKey: process.env.ALPACA_SECRET_PAPER,
  dataBaseUrl: ALPACA_STREAM_FREE,
});

module.exports = AlpacaFreeStream;
