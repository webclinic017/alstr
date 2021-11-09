import CandleList from './CandleList.jsx';
import CssBaseline from '@mui/material/CssBaseline';

export default function App() {
	return (
		<>
			<CssBaseline />
			<CandleList />
		</>
	);
}

// this get's rid of console's module.hot ERROR (from index.js in repo https://github.com/alexdevero/react-postcss-parcel-boilerplate/blob/master/src/index.js)
// if (module.hot) {
// 	module.hot.accept();
// }
