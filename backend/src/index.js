const { AlpacaPaperAPI } = require("./services/alpaca");
const { AlpacaData } = require("./services/alpaca");
const dotenv = require("dotenv");
dotenv.config();

// -- ACCOUNT
const account = async () => {
  try {
    const account = await AlpacaPaperAPI.getAccount();
    console.log(account);
  } catch (error) {
    console.log(error);
  }
};

// -- HISTORICAL DATA
const bars = async () => {
  try {
    const bars = await AlpacaData.getBarsV2("HOG", {
      start: "2021-12-01",
      end: "2021-12-10",
      timeframe: "1Day",
    });

    /**
     * NOTE:
     * have to use [for...of] to iterate through BARS RESPONSE
     * RESPONSE is >>Symbol.asyncIterator<<
     */

    // TODO: re-visit for...OF vs. for...IN

    for await (let bar of bars) {
      console.log(bar);
    }
  } catch (error) {
    console.log(error);
  }
};

// account();
bars();
