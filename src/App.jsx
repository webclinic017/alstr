import CandleList from './components/CandleList.jsx';

export default App = () => {
	return (
		<div className='App'>
			<CandleList />
		</div>
	);
};

// this get's rid of console's module.hot ERROR (from index.js in repo https://github.com/alexdevero/react-postcss-parcel-boilerplate/blob/master/src/index.js)
// if (module.hot) {
// 	module.hot.accept();
// }
