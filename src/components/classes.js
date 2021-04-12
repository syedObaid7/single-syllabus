import React, { Component } from "react";
import Dropdown from "./library/dropdown";

var terms = {
  "Spring 2020": {
    Textbooks: ["Introduction to Computer Science", "College Physics"],
    Assignments: [
      "Get to Know University",
      "Physics Quiz 1",
      "About Me Presentation",
      "CS 1200 Project",
    ],
    "Office Hours": ["TTh 10-11:15 PM"],
  },
  "Fall 2020": {
    Textbooks: ["Introduction to Discrete Mathematics", "Java Data Structures"],
    Assignments: ["Discrete Math Quiz 1", "Java Homework 2", "Java Homework 3"],
    "Office Hours": ["MW 10-11:15 PM", "F 3-4:15 PM"],
  },
  "Spring 2021": {
    Textbooks: [
      "Advanced Algorithms and Data Structures",
      "Software Engineering 10th edition",
      "Digital Logic for Software Engineers",
    ],
    Assignments: [
      "Advanced Algorithms Assignment 1",
      "Software Quiz 1",
      "Senior Design Project",
      "Digital Lab 3",
    ],
    "Office Hours": ["M 10-11:15 PM"],
  },
};

var semesters = [];
for (var key in terms) {
  semesters.push(key);
}

var sections = [];
for (var key in terms[Object.keys(terms)[0]]) {
  sections.push(key);
}

class Classes extends Component {
  state = {
    semester: semesters[0],
    section: sections[0],
  };

  handleSelectSemester = (event) => {
    console.log(event.target.innerHTML);
    this.setState({ semester: event.target.innerHTML });
  };

  handleSelectSection = (event) => {
    this.setState({ section: event.target.innerHTML });
  };

  render() {
    var data = terms[this.state.semester][this.state.section];
    return (
      <div>
        <nav
          className="navbar sticky-top navbar-expand-lg navbar-light bg-light"
          style={{ zIndex: 0 }}
        >
          <ul className="navbar-nav mr-auto">
            <Dropdown
              displayName={this.state.semester}
              items={semesters.map((sem, index) => (
                <li
                  className="nav-link"
                  key={index}
                  onClick={this.handleSelectSemester}
                >
                  {sem}
                </li>
              ))}
            />
            <Dropdown
              displayName={this.state.section}
              items={sections.map((section, index) => (
                <li
                  className="nav-link"
                  key={index}
                  onClick={this.handleSelectSection}
                >
                  {section}
                </li>
              ))}
            />
          </ul>
        </nav>
        <div className="centered centered--vertical">
          <div className="background background--upload"></div>
          <div className="card card--transparent" style={{ width: "40%" }}>
            <h2 style={{ textAlign: "center" }}>{this.state.section}</h2>
            <ul>
              {data.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Classes;
