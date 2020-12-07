import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginGG from './pages/Signin/LoginGG/gg'
import LoginFB from './pages/Signin/LoginFB/fb'

ReactDOM.render(
	<React.StrictMode>
		<LoginGG/>
		<LoginFB/>
	</React.StrictMode>,
	document.getElementById('root')
);
