import React from "react";
import divya from "../pictures/divya.jpg";
import leo from "../pictures/leo.jpg";
import syed from "../pictures/syed.jpg";
import saaketh from "../pictures/saaketh.jpg";
import Card from "./library/card";

const About = () => {
  return (
    <div class="centered centered--vertical">
      <div class="background background--upload"></div>
      <div className="jumbotron card--transparent" style={{ width: "80%" }}>
        <h1 className="display-4" style={{ textAlign: "center" }}>
          About Us
        </h1>
        <p className="lead">
          The Developers are a team of four students from The University of
          Texas at Dallas. We developed this application for students who want
          to be organized and stay on top of their classes. Learn more about The
          Developers below!
        </p>
      </div>
      <div className="card-deck">
        <Card
          image={leo}
          name="Leonardo Acioli"
          location="Recife, Brazil"
          interest="Web development"
          position="Software Engineering Intern"
          funFact="Has done ballet for 6 years"
        />
        <Card
          image={divya}
          name="Divya Karivaradasamy"
          location="Cupertino, California"
          interest="Web development"
          position="Software Engineering Intern"
          funFact="Has played the violin for 12 years"
        />
        <Card
          image={saaketh}
          name="Saaketh Jasti"
          location="Irving, Texas"
          interest="Web/App development"
          position="Software Engineer Intern"
          funFact="Plays acoustic guitar"
        />
        <Card
          image={syed}
          name="Syed Quadri"
          location="Dammam, Saudi Arabia"
          interest="Data Science"
          position="Data Engineer Intern​"
          funFact="Likes solving puzzles"
        />
      </div>
    </div>
  );
};

export default About;
