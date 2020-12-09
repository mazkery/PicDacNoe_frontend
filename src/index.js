import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import LoginGG from './pages/Signin/LoginGG/gg'
import LoginFB from './pages/Signin/LoginFB/fb'
import Login from './pages/Signin/Login/Login'
import Register from './pages/Signin/Register/Register'

ReactDOM.render(
	<React.StrictMode>
		<Login/>
	</React.StrictMode>,
	document.getElementById('root')
);
