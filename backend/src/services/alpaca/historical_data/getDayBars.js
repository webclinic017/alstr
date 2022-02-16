const { AlpacaData } = require("../data");

exports.getDayBars200 = async () => {
  const bars = await AlpacaData.getBarsV2("HOG", {
    start: "2016-12-01",
    end: "2016-12-31",
    timeframe: "1Day",
  });

  console.log(bars);
};
