import React from "react";
import Edit from "./edit";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

            <Router>
              <div>
                <label for="submit" class="btn btn-warning btn-md">
                  <Link to="/edit">Submit</Link>
                </label>
                <Switch>
                  <Route path="/edit">
                    <Edit />
                  </Route>
                </Switch>
              </div>
            </Router>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
