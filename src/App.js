import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home"
import Signup from './components/auth/Signup';
import Login from './components/auth/Login'


function App() {
  return (
    <div className="App">
    
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
