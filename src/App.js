import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StoryPage from "./StoryPage/StoryPage";
import AssignmentTask from "./assignmentTask/assignmentTask";
import PageBlocks from "./PageBlocks/PageBlocks";
import Header from "./Header/Header";
import "./style.css";

function App() {
  return (
    <div className="router">
      <Router>
        <div className="links">
          <Link to="/assignment">Home</Link>
          <Link to="/story-create" className="create">
            Create Story
          </Link>
        </div>

        <Route path="/assignment" component={AssignmentTask} />
        <Route path="/story-create" component={StoryPage} />
      </Router>
    </div>
  );
}

export default App;
