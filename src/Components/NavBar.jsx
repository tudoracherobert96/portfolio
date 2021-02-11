import React, { useEffect, useState } from "react";
import { Navbar, Nav, Popover, OverlayTrigger, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [selected, setSelected] = useState(undefined);

  useEffect(() => {
    if (!selected) return;
    document.querySelectorAll(".nav-link").forEach((elem) => {
      elem.style.borderTop = "0px";
    });
    document.getElementById(selected).style.borderTop = "5px solid orange";
  }, [selected]);

  const selectNav = (e) => {
    setShowNav(false);
    setSelected(e.target.id);
  };
  return (
    <div id="navbar">
      <Navbar bg="light" expand="lg" expanded={showNav}>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setShowNav(!showNav)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand>Portfolio</Navbar.Brand>
          <Nav className="mr-auto">
            <Link
              to="/"
              style={{ padding: "10px 40px" }}
              id="home"
              onClick={(e) => selectNav(e)}
              className="nav-link"
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{ padding: "10px 40px" }}
              id="about"
              onClick={(e) => selectNav(e)}
              className="nav-link"
            >
              About me
            </Link>
            <Link
              to="/cv"
              style={{ padding: "10px 40px" }}
              id="cv"
              onClick={(e) => selectNav(e)}
              className="nav-link"
            >
              CV
            </Link>
            <Link
              to="/contact"
              style={{ padding: "10px 40px" }}
              id="contact"
              onClick={(e) => selectNav(e)}
              className="nav-link"
            >
              Contact
            </Link>
            <Link
              to="/vending"
              style={{ padding: "10px 40px" }}
              id="vending"
              onClick={(e) => selectNav(e)}
              className="nav-link"
            >
              Vending
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
