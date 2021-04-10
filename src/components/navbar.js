import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        Single Syllabus
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
          <Link to="/upload" className="nav-link">
            Upload
          </Link>
          <Link to="/classes" className="nav-link">
            Classes
          </Link>
          <Link to="/user" className="nav-link">
            User
          </Link>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Help
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/help" className="nav-link">
                How To Use
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              <div class="dropdown-divider"></div>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </div>
          </li>
          <Link to="/signout" className="nav-link">
            Sign Out
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
