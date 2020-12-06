import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/' exact component={Homepage} />
					<Route path='/signup' exact component={Signup} />
					<Route path='/signin' exact component={Signin} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
