import axios from "axios";

export const getBarsForRange = async ({ ticker, start, end, timeframe }) => {
  const configs = {
    method: "get",
    baseURL: "https://data.alpaca.markets/v2",
    url: `/stocks/${ticker}/bars`,
    headers: {
      "APCA-API-KEY-ID": process.env.APCA_KEY,
      "APCA-API-SECRET-KEY": process.env.APCA_SECRET,
    },
    params: {
      start,
      end,
      timeframe,
    },
  };

  try {
    const res = await axios(configs);
    return res.data.bars;
  } catch (error) {
    console.log(error);
  }
};
