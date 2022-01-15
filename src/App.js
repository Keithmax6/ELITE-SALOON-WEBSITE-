import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Switch, Route, Router } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import Service from "./Pages/ServicePage/Service";
import Responsive from "./Responsive";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/service" component={Service} />
      </Switch>
    </div>
  );
}

export default App;
