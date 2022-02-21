const IS_PAPER = "../../services/Alpaca/api";
const API_KEY = IS_PAPER
  ? process.env.ALPACA_KEY_PAPER
  : process.env.ALPACA_KEY_LIVE;
const API_SECRET = IS_PAPER
  ? process.env.ALPACA_SECRET_PAPER
  : process.env.ALPACA_SECRET_LIVE;

class MeanReversion_01 {
  constructor() {}
}
