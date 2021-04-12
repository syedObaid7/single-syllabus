import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img
        className="card-img-top profile-pic"
        src={props.image}
        alt="Card cap"
      ></img>
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <p className="card-text">From: {props.location}​</p>
        <p className="card-text">Interest: {props.interest}</p>
        <p className="card-text">Position: {props.position}​</p>
      </div>
      <div className="card-footer">Fun Fact: {props.funFact}</div>
    </div>
  );
};

export default Card;
