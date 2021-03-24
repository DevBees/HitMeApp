
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

    <Sidebar />

    <Route path="/app">
    <Chat/>
    </Route>


    <Route path="/rooms/:roomId">
      <Chat/>
    </Route>

    <Route path="/"> 

    <Chat/>
    
     </Route>


    </Switch>

    </Router>

    </div>
      
    </div>
  );
}

export default App;
