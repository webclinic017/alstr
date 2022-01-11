// import CandleList from './CandleList.jsx';
// import CssBaseline from '@mui/material/CssBaseline';
// import D3Candlestick from './D3Candlestick.jsx';
// import '../scss/App.scss';
import { get_and_store_historical_market_data } from "../../server/workflows/getAlpacaData_insertIntoPgDb";

export default function App() {
	get_and_store_historical_market_data();
	return (
		<div className='App'>
			{/* <CssBaseline /> */}
			{/* <CandleList /> */}
			{/* <D3Candlestick /> */}
		</div>
	);
}

// this get's rid of console's module.hot ERROR (from index.js in repo https://github.com/alexdevero/react-postcss-parcel-boilerplate/blob/master/src/index.js)
if (module.hot) {
	module.hot.accept();
}
