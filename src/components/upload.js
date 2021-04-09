import React from "react";

const Upload = () => {
  return (

    <div class="container uploadbackground">
      <div class="row-upload-area">
          <h1 style={{ textAlign: 'center' ,color:"white", textShadow: "2px 2px 4px #000000"}}>Welcome to Single Syllabus</h1>
          <br />
          <br />
          <form action="/action_page.php">
            <input
              type="file"
              name="file"
              id="file"
              class="inputfile btn btn-primary btn-lg"
            />
            <label for="file" class="btn btn-warning btn-lg" style={{width:"14em"}}>
              + Upload Syllabi
            </label>
            <br />
            <br />
            <br />
            <input type="submit" id="submit" class="submit" />
            <label for="submit" class="btn btn-warning btn-md">
              submit
            </label>
          </form>
          </div>
        </div>
  );
};

export default Upload;
