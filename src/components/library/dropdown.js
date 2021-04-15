import React from "react";

const Dropdown = (props) => {
  return (
    <li className="nav-item dropdown">
      <span
        className="nav-link dropdown-toggle"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.displayName}
      </span>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {props.items}
      </div>
    </li>
  );
};

export default Dropdown;
