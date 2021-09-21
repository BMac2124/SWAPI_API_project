import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "./Home";
import Project from "./Project";
import About from "./About";
import { Switch, Route } from "react-router";
import "../App.css";

function App() {
  return (
    <div id="app">
      {/* THIS IS OUR HOME PAGE
        <Link to="/home">HOME</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}
      <NavBar />

      <Switch>
        <Route  path="/project">
          <Project />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {/* Route is a child */}

      <Footer />
    </div>
  );
}

export default App;
