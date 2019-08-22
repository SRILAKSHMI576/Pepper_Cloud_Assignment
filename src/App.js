import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StoryPage from "./StoryPage/StoryPage";
import AssignmentTask from "./assignmentTask/assignmentTask";
import PageBlocks from "./PageBlocks/PageBlocks";
import Header from "./Header/Header";

function App() {
  return (
    <div className="router">
      <Router>
        <div className="links">
          <Link to="/assignment">Home</Link>
          <br />
          <Link to="/header">Header</Link>
          <br />
          <Link to="/page-blocks">Blogs</Link>
          <br />
          <Link to="/story-create">Create Story</Link>
        </div>

        <Route path="assignment" component={AssignmentTask} />
        <Route path="/header" component={Header} />
        <Route path="/story-create" component={StoryPage} />
        <Route path="/page-blocks" component={PageBlocks} />
      </Router>
    </div>
  );
}

export default App;
