const Alpaca = require("@alpacahq/alpaca-trade-api");
const { key, secret, url_account } = require("./env");

/**
 * AVAILABLE PROPERTIES:
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

class AlpacaService {
  constructor() {
    this.alpaca = new Alpaca({
      keyId: key,
      secretKey: secret,
      baseUrl: url_account,
    });
  }

  async getAlpacaAccount() {
    try {
      const account = await this.alpaca.getAccount();
      return account;
    } catch (error) {
      return error;
    }
  }

  async getAccountConfigs() {}

  async getMinuteBars(symbol, limit, start, end) {
    let requestOptions = {
      limit: limit,
      start: start,
      end: end,
      timeframe: "1Min",
    };

    try {
      const minBars = await this.alpaca.getBarsV2(symbol, requestOptions);

      for await (let minBar of minBars) {
        console.log("MIN_BARS >>\n", minBar);
      }
    } catch (error) {
      console.log("ERROR >>\n", error);
    }
  }
}

module.exports = AlpacaService;
