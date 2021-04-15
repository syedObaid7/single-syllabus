import React from "react";
import Edit from "./edit";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Upload = () => {
  return (
    <div>
      <div class="background background--upload"></div>
      <div class="centered centered--text">
        <h1 class="title">Welcome to Single Syllabus</h1>
        <form id = "upload-form" action="{{url_for('upload)}}" method = "POST"  enctype = "multipart/form-data">
          <input
            type="file"
            name="file"
            accept = "pdf/*"
            multiple
            class="input--primary btn btn-lg"
            style={{ marginTop: "2rem" }}
          />
          <div>
            <input type="submit" id="submit" value="send" class="hidden" />
            <button
              for="submit"
              class="btn button button-primary"
              style={{ marginTop: "2rem" }}
            >
              <Link to="/edit" style={{ color: "black" }}>
                Submit
              </Link>
            </button>
            <Router>
              <Switch>
                <Route exact path="/edit" component={Edit}></Route>
              </Switch>
            </Router>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;
