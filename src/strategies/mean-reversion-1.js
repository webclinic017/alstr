const Alpaca = require("@alpacahq/alpaca-trade-api");

const IS_PAPER = "../../services/Alpaca/api";
const API_KEY = IS_PAPER
	? process.env.ALPACA_KEY_PAPER
	: process.env.ALPACA_KEY_LIVE;
const API_SECRET = IS_PAPER
	? process.env.ALPACA_SECRET_PAPER
	: process.env.ALPACA_SECRET_LIVE;

// TODO: pull example function logic out into individual 'action' functions

class MeanReversion {
	constructor(key, secret, isPaper, stock) {
		this.alpaca = new Alpaca({
			keyId: key,
			secretKey: secret,
			paper: isPaper,
		});
		this.movingAverage = 0;
		this.lastOrder = null;
		this.timeToMarketClose = null;
	}

	/**
	 * --
	 * WAIT FOR MARKET TO OPEN
	 * --
	 * 1. set interval to check market time every 60 seconds
	 */
	async listen_For_Market_Open() {
		return await () => {
			// 1. set interval
			let isOpen = false;
			let timeCheck = setInterval(async () => {}, 60000)

			// 2. get market open status

			// 3. IF open THEN clear interval & execute strategy

			// 4. ELSE check market time in another 60 seconds
		}
	}

	/**
	 * --
	 * REBALANCE
	 * --
	 * 1. get positions if I have any
	 * 2. get new asset price & running ave
	 * 3. IF current price > running ave THEN sell
	 * 4. calculate order size
	 * 5. pad position within buying power || sell off to optimal # of shares
	 *
	 */

	/**
	 * --
	 * BUY AT LIMIT
	 * --
	 * 1. create/execute order
	 * 2. send notification
	 * 3. handle order error
	 */

	/**
	 * --
	 * BUY AT MARKET
	 * --
	 * 1. create/execute order
	 * 2. send notification
	 * 3. handle order error
	 * 4. handle qty. <= 0; unsent
	 */

	/**
	 * --
	 * RUN STRATEGY FUNC
	 * --
	 *
	 *
	 *
	 */
}
