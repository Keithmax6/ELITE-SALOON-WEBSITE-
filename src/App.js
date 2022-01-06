import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import {Switch,Route,Router} from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Home />
    </div>
  );
}

export default App;
