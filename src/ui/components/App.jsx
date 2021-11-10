import CandleList from './CandleList.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import '../scss/App.scss';

export default function App() {
	return (
		<div className='App'>
			<CssBaseline />
			<CandleList />
		</div>
	);
}

// this get's rid of console's module.hot ERROR (from index.js in repo https://github.com/alexdevero/react-postcss-parcel-boilerplate/blob/master/src/index.js)
if (module.hot) {
	module.hot.accept();
}
