import React from "react";

const Contact = () => {
  return (
    <div
      class="jumbotron jumbotron-fluid"
      style={{
        backgroundColor: "darkorange",
        borderRadius: "40px",
        width: "75%",
        alignContent: "center",
        marginLeft: "12.5%",
        marginTop: "1.5%",
        height: "80%",
        color: "white",
      }}
    >
      <div class="container">
        <h3 style={{ textAlign: "center" }}>
          <strong>Contact Information</strong>
        </h3>
        <h4 style={{ textAlign: "center", padding: 10 }}>
          <i class="far fa-envelope"></i>support@singlesyllabus.com
        </h4>
        <h4 style={{ textAlign: "center", padding: 10 }}>
          <i class="fas fa-phone-alt"></i>(123)456-789
        </h4>

        <form
          action="mailto:support@singlesyllabus.com"
          method="post"
          enctype="text/plain"
        >
          <div class="row">
            <div class="col-md-6">
              <input type="text" placeholder="Name" name="name" />
              <br />
              <input type="text" placeholder="E-mail" name="mail" />
              <br />
              <input type="text" placeholder="Phone" name="Phone" />
              <br />
            </div>

            <div class="col-md-6">
              <textarea
                type="text"
                placeholder="Message"
                name="comment"
                style={{ paddingBottom: "auto" }}
              ></textarea>
              <div class="row justify-content-center">
                <input
                  type="submit"
                  class="btn btn-outline-light"
                  style={{
                    borderRadius: "0px",
                    marginTop: 10,
                    marginBottom: 10,
                    width: "35.5%",
                  }}
                  value="Send"
                />
                <input
                  type="reset"
                  class="btn btn-outline-light"
                  style={{
                    borderRadius: "0px",
                    marginLeft: "1%",
                    marginTop: 10,
                    marginBottom: 10,
                    width: "35.5%",
                  }}
                  value="Reset"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
