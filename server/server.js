const alpaca = require("./alpaca/paper_account/config");
const dotenv = require("dotenv");
dotenv.config();

const getAccountInfo = async () => {
	const res = await alpaca.getAccount();
	console.clear();
	console.log(">> ACCOUNT >>\n", res);
};

const getBars = async () => {
	const res = await alpaca.getBarsV2("HOG", {
		limit: 1,
		start: "2021-05-01",
		end: "2021-05-31",
		timeframe: "1Day",
	});

	console.clear();
	console.log(">> DATA >>", res);

	// for await (let b of res) {
	// 	console.log(b);
	// 	console.log(">> DATA >>", b);
	// }
};

// getAccountInfo();
getBars();
