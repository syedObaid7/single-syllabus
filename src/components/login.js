import React from "react";

const login = () => {
  return (
<div>
    <div class="container loginbackground"></div>
        <h1 style={{ textAlign: 'center' ,color:"white", textShadow: "2px 2px 4px #000000",marginTop:"4%",padding:"1em"}}>Single Syllabus</h1>
        <div
      class="jumbotron jumbotron-fluid"
      style={{
        width:"50%",
        marginLeft:"25%",
        backgroundColor:"white",
        padding:"1.2em"
      }}
    >
            <form style={{padding:"2em"}}>
  <div class="form-group">
    <label for="exampleInputEmail1"><strong>Email address</strong></label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"><strong>Password</strong></label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div class="btn-group" role="group" aria-label="Basic example" style={{ margin: "0 auto", textAlign: "center",width: "inherit",display: "inline-block"}}>
  <a type="button" href="./upload" class="btn btn-primary">Sign In</a> 
  <button type="button" class="btn btn-outline-dark">Sign In with Apple</button>
  <button type="button" class="btn btn-outline-danger">Sign In with Google</button>
</div>
</form>
        </div>
</div>
  );
};

export default login;
