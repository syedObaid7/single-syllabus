import React from "react";

const Contact = () => {
  return (
    <div className="centered centered--vertical">
      <div className="background background--upload"></div>
      <div className="jumbotron card--transparent" style={{ width: "80%" }}>
        <div>
          <h1 className="display-4">Contact Us.</h1>
          <h3 style={{ padding: 10 }}>
            <i className="far fa-envelope"></i>support@singlesyllabus.com
          </h3>
          <h3 style={{ padding: 10 }}>
            <i className="fas fa-phone-alt"></i>(123)456-789
          </h3>
          <hr className="my-4" />
          <form
            action="mailto:support@singlesyllabus.com"
            method="post"
            enctype="text/plain"
          >
            <div className="row">
              <div className="col-md-6">
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
              <div className="col-md-6">
                <textarea
                  type="text"
                  placeholder="Message"
                  name="comment"
                  className="textarea--outline"
                ></textarea>
                <input
                  type="submit"
                  className="btn button button--outline"
                  value="Send"
                  style={{marginRight:10}}
                />
                <input
                  type="reset"
                  className="btn button button--outline"
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
