
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

    <div className="app__nameandLogo">
    <h2 className="app__header">HitMeApp</h2>
     <img alt= "logo" src="hitmeapplogo.svg" width = "40px" />
    </div>


    <div className="app__body">

    <Router>

    <Switch>

    <Route path="/app">
    <Sidebar />
    <Chat/>
    </Route>


    <Route path="/">
      <h1>Home</h1>
    </Route>


    </Switch>

    </Router>

    </div>
      
    </div>
  );
}

export default App;
