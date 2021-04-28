import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Login from "./components/login";
import Classes from "./components/classes";
import Upload from "./components/upload";
import Contact from "./components/contact";
import Help from "./components/help";
import About from "./components/about";
import Empty from "./components/empty";
import Edit from "./components/edit";
import User from "./components/user";
import ChangePass from "./components/changepass";
import Preview from "./components/preview";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route component={Login} exact path="/" />
          <div>
            <Navbar />
            <Route component={Classes} path="/classes" />
            <Route component={Upload} path="/upload" />
            <Route component={User} path="/user" />
            <Route component={ChangePass} path="/changepass" />
            <Route component={Contact} path="/contact" />
            <Route component={Help} path="/help" />
            <Route component={About} path="/about" />
            <Route component={Empty} path="/signout" />
            <Route component={Edit} path="/edit" />
            <Route component={Preview} path="/preview" />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
