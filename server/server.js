const alpaca = require("./alpaca/paper_account/config");
const dotenv = require("dotenv");
dotenv.config();

(async () => {
	const res = await alpaca.getAccount();
	console.log(">> ALPACA RESPONSE >>\n", res);
})();
