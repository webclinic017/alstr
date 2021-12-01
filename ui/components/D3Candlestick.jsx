import * as d3 from "d3";
import { useEffect } from "react";
import { getBarsInRange } from "../../alpaca/data/getBarsInRange";

const D3Candlestick = () => {
	useEffect(() => {
		const fakeData = [
			{
				t: "2021-02-01T16:01:00Z",
				o: 133.32,
				h: 133.74,
				l: 133.31,
				c: 133.5,
				v: 9876,
			},
		];

		const svg = d3
			.select("svg")
			.attr("height", 450)
			.attr("width", 450)
			.style("background", "#333");

		svg
			.selectAll("rect")
			.data(fakeData)
			.enter()
			.append("rect")
			.attr("x", 150)
			.attr("y", 150)
			.attr("height", (d, i) => {
				return (Math.max(d.o, d.c) - Math.min(d.o, d.c)) * 100;
			})
			.attr("width", 50)
			.attr("fill", d => (d.c > d.o ? "limegreen" : "red"));
	});

	return <svg id='candlestick'></svg>;
};

export default D3Candlestick;
