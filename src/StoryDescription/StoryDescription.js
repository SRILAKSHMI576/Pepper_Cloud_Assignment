import React from "react";
import "./style.css";

function StoryDescription() {
  return (
    <div>
      <center>
        <h3>
          The Shy Person’s Guide to Winning Friends and Influencing People
        </h3>

        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbXw0IkEFrVGArPeMnfhwBf74hHj62GoOZtsXvCijS7stjuQsjw"
        />
        <p>
          Single page websites are great because they dynamically update as the
          <br />
          user interacts with application, thus allowing for shorter loading
          times
          <br />
          between pages. Although the page never actually reloads or sends you
          to
          <br />
          a new route, the app mimics this behavior by manipulating the window’s
          <br />
          history or location objects. Using a link to navigate to a new page
          with
          <br />
          is pretty straightforward: a user interacts with an element, and that
          <br />
          event triggers the history or location change. Redirecting proves to
          be
          <br />
          more difficult, as the routing action needs to be fired based on the
          <br />
          state of the application.
        </p>
      </center>
    </div>
  );
}

export default StoryDescription;
