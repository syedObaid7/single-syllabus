import React from "react";
import FormField from "./form/formField";

const Login = () => {
  return (
    <div>
      <div class="background background--login"></div>
      <h1 className="title">Single Syllabus</h1>
      <div class="card card--transparent">
        <form>
          <FormField
            id="email"
            title="Email address"
            placeholder="Enter email"
          />
          <FormField id="password" title="Password" placeholder="Password" />
          <a type="button" href="./upload" class="button btn btn-primary">
            Sign In
          </a>
          <button type="button" class="btn btn-outline-dark">
            Sign In with Apple
          </button>
          <button type="button" class="btn btn-outline-danger">
            Sign In with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
