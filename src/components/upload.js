import React from "react";

const Upload = () => {
  return (

    <div class="container"  >
      <div class="row">
        <div class="col text-center align-middle">
          <h1 style={{ textAlign: 'center' }}>Welcome to Single Syllabus</h1>
          <br />
          <br />
          <form action="/action_page.php">
            <input
              type="file"
              name="file"
              id="file"
              class="inputfile btn btn-primary btn-lg"
            />
            <label for="file" class="btn btn-warning btn-lg">
              + Upload Syllabi
            </label>
            <br />
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
    </div>
  );
};

export default Upload;
