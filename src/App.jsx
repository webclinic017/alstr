import { useEffect, useState } from 'react';
import { getCandles } from './data/alpaca/paper/getCandles.js';

export default App = () => {
	const [bars, setBars] = useState([]);

	useEffect(() => {
		const candles = getCandles();
		setBars([candles]);
	}, []);

	return (
		<div>
			<h1>Testing...</h1>
		</div>
	);
};

// this get's rid of console's module.hot ERROR (from index.js in repo https://github.com/alexdevero/react-postcss-parcel-boilerplate/blob/master/src/index.js)
// if (module.hot) {
// 	module.hot.accept();
// }
