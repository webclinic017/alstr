const URLS = require("./urls");
const __PAPER__ = true;

module.exports = __PAPER__
	? {
			key: process.env.APCA_KEY_PAPER,
			secret: process.env.APCA_SECRET_PAPER,
			isPaper: true,
	  }
	: {
			key: process.env.APCA_KEY_LIVE,
			secret: process.env.APCA_SECRET_LIVE,
			isPaper: false,
	  };
