import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ChatBox from "./pages/Chatbox/chatbox.jsx";
import GameMatch from "./pages/GameMatch/index";
import Profile from "./pages/Profile/profile";
import Ranking from "./pages/Ranking/ranking";
import History from "./pages/History/history";

function App() {
  window.localStorage.removeItem("username");
  window.localStorage.removeItem("token");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/dashboard" exact component={Homepage} />
          <Route path="/chatbox" exact component={ChatBox} />
          <Route path="/game/:id" exact component={GameMatch} />
          <Route path="/ranking" exact component={Ranking} />
          <Route path="/history/:id" exact component={History} />
          <Route exact path="/:username" exact component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
