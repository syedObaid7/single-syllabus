import { render } from "@testing-library/react";
import React, { Component } from "react";
import EdiText from "react-editext";

var classes = {
  "Software Engineering": {
    textbooks: [
      "Software Engineering 10th edition",
      "Agile Manifesto",
      "Engineering Software",
    ],
    assignments: ["Project assgn 1", "Homework assgn 2", "Project assgn 2"],
    office_hours: ["none"],
  },
  "Data Structures and Algorithms": {
    textbooks: ["Java Data Structures"],
    assignments: ["Project 1", "Quiz 1"],
    office_hours: ["MW 10-11:15 PM", "ECSS 2301"],
  },
};
var classList = [];
for (var key in classes) {
  classList.push(key);
}
var setValue;
const handleSave = (val) => {
  //console.log("Edited Value -> ", val);
  setValue = val;
  console.log(setValue);
};

function storeChanges(item) {
  console.log(item);
  // console.log(change);
}

function SectionList(props) {
  const items = props.items;
  const listItems = items.map((item) => (
    <EdiText
      type="text"
      submitOnEnter
      cancelOnEscape
      inputProps={{
        style: {
          backgroundColor: "#233C51",
          color: "#E6ECF1",
        },
      }}
      value={item}
      onSave={handleSave}
    />
  ));
  return listItems;
}

function ClassesList(props) {
  const items = props.items;
  const listItems = items.map((item) => (
    <div>
      <h1>{item}</h1>
      <br></br>
      <h3>Textbooks</h3>
      <SectionList items={classes[item].textbooks} />
      <br></br>
      <br></br>
      <h3>Assignments</h3>
      <SectionList items={classes[item].assignments} />
      <br></br>
      <br></br>
      <h3>Office Hours</h3>
      <SectionList items={classes[item].office_hours} />
      <br></br>
    </div>
  ));
  return listItems;
}

class Edit extends Component {
  onSave = (val) => {
    console.log("Edited Value -> ", val);
  };

  render() {
    return (
      <div class="container">
        <br></br>
        <h3 id="edit">Edit Syllabi</h3>
        <button id="continueB">Continue</button>
        <br></br>
        <br></br>
        <br></br>
        <ClassesList items={classList} />
      </div>
    );
  }
}

export default Edit;
