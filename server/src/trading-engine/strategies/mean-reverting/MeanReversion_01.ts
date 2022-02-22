const IS_PAPER = "../../services/Alpaca/api";
const API_KEY = IS_PAPER
	? process.env.ALPACA_KEY_PAPER
	: process.env.ALPACA_KEY_LIVE;
const API_SECRET = IS_PAPER
	? process.env.ALPACA_SECRET_PAPER
	: process.env.ALPACA_SECRET_LIVE;

// TODO: pull example function logic out into individual 'action' functions

class MeanReversion_01 {
	constructor() {}

	/**
	 * --
	 * WAIT FOR MARKET TO OPEN
	 * --
	 * 1. run every minute
	 */

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
