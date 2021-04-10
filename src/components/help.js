import React from "react";

const Help = () => {
  return (
    <div class="centered centered--vertical">
      <div class="background background--upload "></div>
      <div class="jumbotron card--transparent" style={{ width: "80%" }}>
        <div>
          <h1 class="display-4">How does Single Syllabus work?</h1>
          <hr class="my-4" />
          <h2>Simple upload.</h2>
          <p>
            It's simple to create a consolidated syllabus. To start, upload your
            semester's syllabi, each in PDF format, on the upload page.
          </p>
          <h2>Fast Identification.</h2>
          <p>
            The Single Syllabus system will identify key sections in each
            syllabus which you can choose to include in your final product.
          </p>
          <h2>Download, Share, or Save for Later.</h2>
          <p>
            Lastly, simply download or share your syllabus! To keep your
            syllabus for future reference, hit "save" on the preview page. Your
            syllabus is then stored in your classes for easy lookup.
          </p>
          <a class="btn btn-outline-dark btn-lg" href="./contact" role="button">
            Contact us for more questions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;
