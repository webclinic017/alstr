import { useEffect, useState } from 'react';
import { getBars } from '../data/alpaca/paper/getBars.js';
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
					<span>{candle.o.toFixed(2)}</span> |{' '}
					<span>{candle.c.toFixed(2)}</span> |{' '}
					<span>{candle.h.toFixed(2)}</span> |{' '}
					<span>{candle.l.toFixed(2)}</span>
				</ListItem>
			))}
		</List>
	);
};
