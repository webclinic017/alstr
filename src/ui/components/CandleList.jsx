import { useEffect, useState } from 'react';
import { getBars } from '../../algo/alpaca/paper/getBars.js';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default CandleList = () => {
	const [candles, setCandles] = useState([]);

	useEffect(async () => {
		const candles = await getBars();
		setCandles(candles);
	}, []);

	return (
		<List>
			{candles.map((candle) => (
				// TODO: create util func that parses ints from candle time to use as comp key
				<ListItem
					key={candle.t
						.toString()
						.match(/[0-9]+/g)
						.join('')}
					candle={candle}
					className='candle'
				>
					<div className='candle__metric'>
						<p>OPEN</p>
						<p>{candle.o.toFixed(2)}</p>
					</div>
					<div className='candle__metric'>
						<p>HIGH</p>
						<p>{candle.h.toFixed(2)}</p>
					</div>
					<div className='candle__metric'>
						<p>LOW</p>
						<p>{candle.l.toFixed(2)}</p>
					</div>
					<div className='candle__metric'>
						<p>CLOSE</p>
						<p>{candle.c.toFixed(2)}</p>
					</div>
				</ListItem>
			))}
		</List>
	);
};
