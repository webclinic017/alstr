import ReactDOM from 'react-dom';
import App from './ui/components/App.jsx';
import dotenv from 'dotenv';
dotenv.config();

const app = document.getElementById('alstr-1');
ReactDOM.render(<App />, app);
