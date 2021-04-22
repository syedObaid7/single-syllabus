import React, { Component } from "react";
import Edit from "./edit";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileUrl: "",
    };
  }

  handleUploadFile = (ev) => {
    ev.preventDefault();
    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
    data.append("filename", this.fileName.value);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ fileUrl: `http://localhost:8000/${body.file}` });
      });
    });
  };

  render() {
    return (
      <div>
        <div class="background background--upload"></div>
        <div class="centered centered--text">
          <h1 class="title">Welcome to Single Syllabus</h1>
          <form>
            <input
              type="file"
              name="file"
              accept="pdf/*"
              multiple
              class="input--primary btn btn-lg"
              style={{ marginTop: "2rem" }}
              ref={(ref) => {
                this.fileName = ref;
                this.uploadInput = ref;
              }}
            />
            <div>
              <input type="submit" id="submit" value="send" class="hidden" />
              <button
                for="submit"
                class="btn button button-primary"
                style={{ marginTop: "2rem" }}
                onClick={this.handleUploadFile}
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
  }
}

export default Upload;
