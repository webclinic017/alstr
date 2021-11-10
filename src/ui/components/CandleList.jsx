import { useEffect, useState } from 'react';
import { getBars } from '../../algo/alpaca/paper/getBars.js';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import '../scss/CandleList.scss';

export default CandleList = () => {
	const [candles, setCandles] = useState([]);

	useEffect(async () => {
		const barParams = {
			ticker: 'GME',
			start: '2020-12-31',
			end: '2021-05-28',
			timeframe: '1Day',
		};
		const candles = await getBars(barParams);
		setCandles(candles);
	}, []);

	return (
		<>
			<h1 className='candlesticks__header'>
				<span className='candlesticks__header-label'>DATE</span>
				<span className='candlesticks__header-label'>OPEN</span>
				<span className='candlesticks__header-label'>HIGH</span>
				<span className='candlesticks__header-label'>LOW</span>
				<span className='candlesticks__header-label'>CLOSE</span>
			</h1>
			<List>
				{candles.map((candle) => (
					// TODO: create util func that parses ints from candle time to use as comp key
					<ListItem
						key={candle.t
							.toString()
							.match(/[0-9]+/g)
							.join('')}
						candle={candle}
						className='candlestick'
					>
						<span className='candlestick__value'>
							{new Date(candle.t).toLocaleDateString('en-US', {
								weekday: 'long',
								month: 'short',
								day: 'numeric',
							})}
						</span>
						<span className='candlestick__value'>${candle.o.toFixed(2)}</span>
						<span className='candlestick__value'>${candle.h.toFixed(2)}</span>
						<span className='candlestick__value'>${candle.l.toFixed(2)}</span>
						<span className='candlestick__value'>${candle.c.toFixed(2)}</span>
					</ListItem>
				))}
			</List>
		</>
	);
};
