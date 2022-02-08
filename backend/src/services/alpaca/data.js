const Alpaca = require("@alpacahq/alpaca-trade-api");
const { ALPACA_DATA } = require("../../constants/urls");
const KEY = process.env.ALPACA_KEY_PAPER;
const SECRET = process.env.ALPACA_SECRET_PAPER;
const dataBaseUrl = ALPACA_DATA;

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

const AlpacaData = new Alpaca({
  keyId: KEY,
  secretKey: SECRET,
  dataBaseUrl,
});

module.exports = AlpacaData;
