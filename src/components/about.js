import React from 'react';

const About = () => {

    return (
        <div>
            <div
            class="jumbotron jumbotron-fluid"
            style={{
                backgroundColor: 'orange',
                color: 'white',
                borderRadius: 0,
                width: '40%',
                marginLeft: '30%',
                height: '50%',
                marginTop: '8%'}}>
            <div class="container">
                <h1 class="display-4" style={{textAlign: 'center'}}>About Us</h1>
                <p class="lead">
                The Developers are a team of 4 students from The University of Texas
                at Dallas. We developed this application for students who want to be
                organized and stay on top of things when it comes to class
                information. To know more about the team members hover over their
                names below.
                </p>
            </div>
            </div>
            <div id="onebox" style={{marginLeft: '37%'}}>
            <button
                type="button"
                class="btn btn-warning dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                Syed
            </button>
            <div class="dropdown-menu">Something about Syed</div>
            <button
                type="button"
                class="btn btn-warning dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                Divya
            </button>
            <div class="dropdown-menu">Something about Divya</div>

            <button
                type="button"
                class="btn btn-warning dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                Leo
            </button>
            <div class="dropdown-menu">Something about Leo</div>
            <button
                type="button"
                class="btn btn-warning dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                Saaketh
            </button>
            <div class="dropdown-menu">Something about Saaketh</div>
            </div>            
        </div>
    )
}

export default About;