import { useEffect, useState } from "react";
import { getBarsForRange } from "../../algo/alpaca/paper/getBarsForRange.js";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "../scss/CandleList.scss";

export default CandleList = () => {
  const [candles, setCandles] = useState([]);
  const [range, setRange] = useState("");

  const handleRangePick = (e) => {
    setRange(e.target.value);
  };

  useEffect(() => {
    const barParams = {
      ticker: "GME",
      start: "2020-12-31",
      end: "2021-05-28",
      timeframe: "1Day",
    };
    const candles = getBarsForRange(barParams);
    setCandles(candles);
  }, []);

  return (
    <div className="range_candlesticks">
      <Box className="range-picker">
        <FormControl>
          <InputLabel id="MovingAveRange">Range</InputLabel>
          <Select
            labelId="MovingAveRange"
            id="range-select"
            value={range}
            label="Range"
            onChange={handleRangePick}
          >
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
            <MenuItem value={200}>200</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <h1 className="candlesticks__header">
        <span className="candlesticks__header-label">DATE</span>
        <span className="candlesticks__header-label">OPEN</span>
        <span className="candlesticks__header-label">HIGH</span>
        <span className="candlesticks__header-label">LOW</span>
        <span className="candlesticks__header-label">CLOSE</span>
      </h1>
      <List>
        {candles.map((candle) => (
          // TODO: create util func that parses ints from candle time to use as comp key
          <ListItem
            key={candle.t
              .toString()
              .match(/[0-9]+/g)
              .join("")}
            candle={candle}
            className="candlestick"
          >
            <span className="candlestick__value">
              {new Date(candle.t).toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
              })}
            </span>
            <span className="candlestick__value">${candle.o.toFixed(2)}</span>
            <span className="candlestick__value">${candle.h.toFixed(2)}</span>
            <span className="candlestick__value">${candle.l.toFixed(2)}</span>
            <span className="candlestick__value">${candle.c.toFixed(2)}</span>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
