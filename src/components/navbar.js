import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./library/dropdown";

const Navbar = () => {
  return (
    <div>
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
            <button
              type="button"
              class="btn btn-warning"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Sign Out
            </button>
          </ul>
        </div>
      </nav>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Are you sure you want to sign out?
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-footer">
              <Link to="/" className="btn btn-success" id="signout">
                Yes
              </Link>
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
