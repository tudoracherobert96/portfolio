import React from "react";
import { Navbar, Nav, Popover, OverlayTrigger, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About me</Link>
            <Link to="/cv">CV</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/test">Test</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
