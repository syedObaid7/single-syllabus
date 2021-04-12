import React from "react";

const Contact = () => {
  return (
    <div class="centered centered--vertical">
      <div class="background background--upload"></div>
      <div class="jumbotron card--transparent" style={{ width: "80%" }}>
        <div>
          <h1 class="display-4">Contact Us.</h1>
          <h3 style={{ padding: 10 }}>
            <i class="far fa-envelope"></i>support@singlesyllabus.com
          </h3>
          <h3 style={{ padding: 10 }}>
            <i class="fas fa-phone-alt"></i>(123) 456-789
          </h3>
          <hr class="my-4" />
          <form
            action="mailto:support@singlesyllabus.com"
            method="post"
            enctype="text/plain"
          >
            <div class="row">
              <div class="col-md-6">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  style={{ marginBottom: 20 }}
                />
                <input
                  type="text"
                  placeholder="E-mail"
                  name="mail"
                  style={{ marginBottom: 20 }}
                />
                <input type="text" placeholder="Phone" name="Phone" />
              </div>
              <div class="col-md-6">
                <textarea
                  type="text"
                  placeholder="Message"
                  name="comment"
                  className="textarea--outline"
                ></textarea>
                <input
                  type="submit"
                  class="btn button button--outline"
                  value="Send"
                  style={{ marginRight: 10 }}
                />
                <input
                  type="reset"
                  class="btn button button--outline"
                  value="Reset"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
