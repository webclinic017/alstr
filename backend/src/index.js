const { AlpacaData } = require("./services/alpaca");
const dotenv = require("dotenv");
dotenv.config();

// see how far back I can go
const bars = async () => {
  try {
    const bars = await AlpacaData.getBarsV2("HOG", {
      start: "2016-12-01",
      end: "2016-12-31",
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

bars();
