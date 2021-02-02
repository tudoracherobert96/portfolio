import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import CoverLetter from "./CoverLetter";
import Error from "./Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const RouterSetup = () => {
  const checkScrollTop = () => {
    document.getElementsByClassName("btnGoUp")[0].style.display =
      window.pageYOffset > 100 ? "block" : "none";
  };

  window.addEventListener("scroll", checkScrollTop);
  return (
    <Router>
      <NavBar id="navbar" />
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
      <button
        onClick={() =>
          document
            .getElementById("p4")
            .scrollIntoView({ block: "end", behavior: "smooth" })
        }
        style={{ marginTop: "50px" }}
        id="btnTest"
      >
        focus bottom
      </button>
      <div>
        <h2 style={{ height: "600px" }} id="p1">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum
        </h2>
        <h2 style={{ height: "600px" }} id="p2">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum
        </h2>
        <h2 style={{ height: "600px" }} id="p3">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum
        </h2>
        <h2 style={{ height: "600px" }} id="p4">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum
        </h2>
      </div>
      <FaArrowUp
        className="btnGoUp"
        onClick={() =>
          document
            .getElementById("navbar")
            .scrollIntoView({ block: "end", behavior: "smooth" })
        }
      />
    </Router>
  );
};

export default RouterSetup;
