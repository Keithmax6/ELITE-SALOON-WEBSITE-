import React from 'react';
import NavBar from './Components/NavBar.js/NavBar';
import {Switch,Route,Router} from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
     <NavBar />
     <br/>
     <Home />
    </div>
  );
}

export default App;
