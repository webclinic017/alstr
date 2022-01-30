const { APCA_KEY, APCA_SECRET } = require("../config/env.js");

module.exports = () => {
	this.key = APCA_KEY;
	this.secret = APCA_SECRET;
	this.getKey = () => console.log(APCA_KEY);
	this.getSecret = () => console.log(APCA_SECRET);
};
