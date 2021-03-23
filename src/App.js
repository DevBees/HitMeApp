
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { Router } from 'react-router';

function App() {
  return (
    <div className="App">

    <div className="app__nameandLogo">
    <h2 className="app__header">HitMeApp</h2>
     <img alt= "logo" src="hitmeapplogo.svg" width = "40px" />
    </div>


    <div className="app__body">

    <Router>

    <Sidebar />
    <Chat/>

    </Router>

    </div>
      
    </div>
  );
}

export default App;
