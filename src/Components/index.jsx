import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import CoverLetter from "./CoverLetter";
import Error from "./Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const RouterSetup = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cv">
          <CoverLetter />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterSetup;
