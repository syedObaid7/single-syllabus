import React from "react";

const Dropdown = (props) => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.displayName}
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {props.items}
      </div>
    </li>
  );
};

export default Dropdown;
