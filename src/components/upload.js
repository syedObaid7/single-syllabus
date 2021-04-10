import React from "react";

const Upload = () => {
  return (
    <div>
      <div class="background background--upload"></div>
      <div class="centered centered--text">
        <h1 class="title">Welcome to Single Syllabus</h1>
        <form action="/action_page.php">
          <input
            type="file"
            name="file"
            id="file"
            class="input--primary btn btn-lg"
            style={{ marginTop: "2rem" }}
          />
          <div>
            <input type="submit" id="submit" class="hidden" />
            <label
              for="submit"
              class="btn button button-primary"
              style={{ marginTop: "2rem" }}
            >
              Submit
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;
