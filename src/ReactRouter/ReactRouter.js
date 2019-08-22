import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StoryPage from "../StoryPage/StoryPage";

function ReactRouter() {
  return (
    <div>
      <Router>
        <div>
          <Route path="/story-page" component={StoryPage} />
        </div>
      </Router>
    </div>
  );
}

export default ReactRouter;
