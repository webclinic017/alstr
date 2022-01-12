const alpaca = require("./config.paper");

getAccountInfo = async () => {
	try {
		const res = await alpaca.getAccount();
		console.clear();
		console.log(">>>>>>>>>> ACCOUNT >>>>>>>>>>\n", res);
	} catch (error) {
		console.log(">>>>>>>>>> GET ACCOUNT ERROR >>>>>>>>>>", error);
	}
};

module.exports = getAccountInfo;
