import React from "react";
import Edit from "./edit";
import About from "./about";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { browserHistory } from "react-router";
const Upload = () => {
  return (
    <div class="container">
      <div class="row" style={{ marginTop: "15%" }}>
        <div class="col text-center align-middle">
          <h1 style={{ textAlign: "center" }}>Welcome to Single Syllabus</h1>
          <br />
          <br />
          <form action="/action_page.php">
            <input
              type="file"
              name="file"
              id="file"
              class="inputfile btn btn-primary btn-lg"
            />
            <label for="file" class="btn btn-warning btn-lg">
              + Upload Syllabi
            </label>
            <br />
            <br />
            <br />
            <br />
            <input type="submit" id="submit" class="submit" />

            <div>
              <button for="submit" class="btn btn-warning btn-md">
                <Link to="/edit">Submit</Link>
              </button>
            </div>

            <Router>
              <Switch>
                <Route exact path="/edit" component={Edit}></Route>
              </Switch>
            </Router>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
