import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ChatBox from './pages/Chatbox/chatbox.jsx';
import Game from './pages/GameMatch/components/Game'
import Profile from './pages/Profile/profile'
import Ranking from './pages/Ranking/ranking'

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/' exact component={Homepage} />
					<Route path='/signup' exact component={Signup} />
					<Route path='/signin' exact component={Signin} />
					<Route path='/dashboard' exact component={Homepage} />
					<Route path='/chatbox' exact component={ChatBox} />
					<Route path='/game/:id' exact component={Game} />
					<Route path='/ranking' exact component={Ranking} />
					<Route exact path='/:username' exact component={Profile}/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
