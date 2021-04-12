import React from "react";

const ChangePass = () => {
  return (
    <div class="centered centered--vertical">
      <div class="background background--upload "></div>
      <div class="jumbotron card--transparent user--align">
        <div class="user--userimage"></div>
        <div class="user--text">
          <form action="./user">
            <input
              type="text"
              placeholder="Current password"
              style={{ width: "100%" }}
            />
            <input
              type="text"
              placeholder="New password"
              style={{ width: "100%" }}
            />
            <input
              type="text"
              placeholder="Confirm password"
              style={{ width: "100%" }}
            />

            <div class="row">
              <div class="col-md-6">
                <input
                  class="btn button btn-outline-danger"
                  type="submit"
                  value="EXIT"
                />
              </div>
              <div class="col-md-6">
                <input
                  class="btn button btn-outline-success"
                  type="submit"
                  value="SAVE"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
