import React from "react";

const User = () => {
  return (
    <div class="centered centered--vertical">
      <div class="background background--upload "></div>
      <div class="jumbotron card--transparent user--align">
        <div class="user--userimage"></div>
        <div class="user--text">
          <h3>Username: Temoc_1970</h3>
          <h3>Password: *************</h3>
          <br />
          <form action="./changepass">
            <input class="btn button button-outline" type="submit" value="change password"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
