import React from "react";

const FormField = (props) => {
  return (
    <div class="form-group">
      <label for={props.id}>{props.title}</label>
      <input
        type={props.id}
        class="form-control"
        id={props.id}
        aria-describedby={props.id}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

export default FormField;
