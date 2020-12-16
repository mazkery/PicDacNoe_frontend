import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import GameMatch from './pages/GameMatch';
import ChatBox from './pages/Chatbox/chatbox';
import socketClient  from "socket.io-client";

const SERVER="http://localhost:5000";

function App() {
	var socket = socketClient (SERVER);
	socket.on('connection', () => {
        console.log(`I'm connected with the back-end`);
	});
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/register' component={Signup} />
					<Route exact path='/login' component={Signin} />
					<Route exact path='/dashboard' component={Homepage} />
					/** Testing route (Delete later) */
					<Route exact path='/test' component={ChatBox} />
					<Route exact path='/test01' component={GameMatch} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
