const { key, secret } = require("./services/config/env");

module.exports = () => {
	this.key = APCA_KEY;
	this.secret = APCA_SECRET;
	this.getKey = () => console.log(APCA_KEY);
	this.getSecret = () => console.log(APCA_SECRET);
};
