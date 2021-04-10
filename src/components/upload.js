import React from "react";
import Edit from "./edit";
import About from "./about";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { browserHistory } from "react-router";
const Upload = () => {
  return (
<<<<<<< HEAD
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
=======
    <div>
      <div class="background background--upload"></div>
      <div class="row-upload-area">
        <h1
          style={{
            textAlign: "center",
            color: "white",
            textShadow: "2px 2px 4px #000000",
          }}
        >
          Welcome to Single Syllabus
        </h1>
        <br />
        <br />
        <form action="/action_page.php">
          <input
            type="file"
            name="file"
            id="file"
            class="inputfile btn btn-warning btn-lg"
          />

          <br />
          <br />
          <br />
          <input type="submit" id="submit" class="submit" />
          <label for="submit" class="btn btn-warning btn-md">
            submit
          </label>
        </form>
>>>>>>> df0066b27f69b6fa9a9e05aa1365a93f83a2da25
      </div>
    </div>
  );
};

export default Upload;
