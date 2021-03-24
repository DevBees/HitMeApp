
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [user,setUser] = useState(null);


  return (

    <div className="App">

{!user ? (
      <h1>Login please</h1>

      ) :
      ( 

        <div className="app__whole">

        <div className="app__nameandLogo">
    <h2 className="app__header">HitMeApp</h2>

     <img alt= "logo" src="hitmeapplogo.svg" width = "40px" />
    </div>


    <div className="app__body">

    <Router>


    <Sidebar />

    <Switch>

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
    
    )
      }

      
    </div>
  );
}

export default App;
