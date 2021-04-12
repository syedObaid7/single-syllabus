import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./library/dropdown";

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
          <Dropdown
            displayName="Help"
            items={[
              <Link to="/help" className="nav-link">
                How To Use
              </Link>,
              <Link to="/contact" className="nav-link">
                Contact
              </Link>,
              <div className="dropdown-divider"></div>,
              <Link to="/about" className="nav-link">
                About
              </Link>,
            ]}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
