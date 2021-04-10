import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Upload from "./upload";
import About from "./about";
import Contact from "./contact";
import Help from "./help";
import Edit from "./edit"

const Navbar = () => {
  return (
    <Router>
      <div>
        <nav
          className="navbar sticky-top navbar-expand-lg navbar-light"
          style={{ backgroundColor: "orange", color: "black" }}
        >
          <a className="navbar-brand" href="index.php">
            <strong>Single Syllabus</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/classes" className="nav-link">
                  Classes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Upload
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user" className="nav-link">
                  User
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/help" className="nav-link">
                  ?
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signout" className="nav-link">
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/classes">
            <About />
          </Route>
          <Route path="/user">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signout">
            <About />
          </Route>
          <Route path="/">
            <Upload />
          </Route>
        </Switch>
=======
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-light"
      style={{ backgroundColor: "orange", color: "black" }}
    >
      <a className="navbar-brand" href="/">
        <strong>Single Syllabus</strong>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/classes" className="nav-link">
              Classes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/upload" className="nav-link">
              Upload
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link">
              User
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/help" className="nav-link">
              ?
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signout" className="nav-link">
              Sign Out
            </Link>
          </li>
        </ul>
>>>>>>> df0066b27f69b6fa9a9e05aa1365a93f83a2da25
      </div>
    </nav>
  );
};

export default Navbar;
