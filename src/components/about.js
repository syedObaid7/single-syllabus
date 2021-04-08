import React from 'react';
import divya from '../pictures/divya.jpg';
import leo from '../pictures/leo.jpg';
import syed from '../pictures/syed.jpg';
import saaketh from '../pictures/saaketh.jpg';

const About = () => {

    return (
    <div>
        
  <div className="jumbotron jumbotron-fluid about-top">
  <div className="container about-top-text">
    <h1 className="display-4" style={{textAlign:"center",color:"white"}}><strong>About Us</strong></h1>
    <p className="lead">The Developers are a team of 4 students from The University of Texas at Dallas. We developed this application
    for students who want to be organized and stay on top of things when it comes to className information. To know more about the team
    members hover over their names below.</p>
  </div>
  </div>

  <h1 className="members">Members</h1>
  
  <div className="card-deck">
  <div className="card">
    <img className="card-img-top" src={leo}alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Leonardo Acioli</h5>
      <p className="card-text">From: Recife, Brazil​</p>
       <p className="card-text">Interest: Web Development</p>
        <p className="card-text">Position: Software Engineer intern​</p>
    </div>
     <div className="card-footer">Fun Fact: Has done Ballet for 6 years​</div>
</div>
  <div className="card">
    <img className="card-img-top" src={divya} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Divya Karivaradasamy</h5>
      <p className="card-text">From: Cupertino, CA​</p>
       <p className="card-text">Interest: Web Development</p>
        <p className="card-text">Position: Software Engineer​</p>
    </div>
     <div className="card-footer">Fun Fact: Has played the violin for 12 years</div>
    </div>
  <div className="card">
    <img className="card-img-top" src={saaketh} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Saaketh Jasti</h5>
      <p className="card-text">From: Irving, TX​</p>
       <p className="card-text">Interest: Web/App development</p>
        <p className="card-text">Position: Technology Intern (Infrastructure)​</p>
    </div>
    <div className="card-footer">Fun Fact: Plays acoustic guitar</div>
</div>
  <div className="card d-flex flex-nowrap">
    <img className="card-img-top" src={syed} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Syed Quadri</h5>
      <p className="card-text">From: Dammam, Saudi Arabia​</p>
       <p className="card-text">Interest: Data Science</p>
        <p className="card-text">Position: Data Engineer</p>
    </div>
     <div className="card-footer">Fun Fact: Likes solving puzzles </div>
     </div>
    </div>
    </div>
    );
};

export default About;