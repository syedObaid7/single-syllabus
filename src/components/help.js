import React from "react";

const Help = () => {
  return (
    <div
      class="jumbotron"
      style={{
        background: "darkorange",
        color: "white",
        marginTop: "1.5%",
        width: "80%",
        marginLeft: "10%",
      }}
    >
      <h1 class="display-4">How does Single Syllabus work?</h1>
      <hr class="my-4" />
      <h4>Simple upload.</h4>
      <p>
        It's simple to create a consolidated syllabus. To start, upload your
        semester's syllabi, each in PDF format, on the upload page.
      </p>
      <h4>Fast Identification.</h4>
      <p>
        The Single Syllabus system will identify key sections in each syllabys
        which you can choose to include in your final product.
      </p>
      <h4>Download, Share, or Save for Later.</h4>
      <p>
        Lastly, simply download or share your syllabus! To keep your syllabus
        for future reference, hit "save" on the preview page. Your syllabus is
        then stored on the classes page for easy lookup.
      </p>
      <p class="lead">
        <a
          class="btn btn-outline-light btn-lg"
          href="contact.html"
          role="button"
        >
          Contact us for more questions
        </a>
      </p>
    </div>
  );
};

export default Help;
