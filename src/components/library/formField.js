import React from "react";

const FormField = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.title}</label>
      <input
        type={props.id}
        className="form-control"
        id={props.id}
        aria-describedby={props.id}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

export default FormField;
