import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StoryPage from "./StoryPage/StoryPage";
import "./style.css";
import StoriesDashboard from "./StoriesDashboard/StoriesDashboard";
import StoryDescription from "./StoryDescription/StoryDescription";

function App() {
  return (
    <div className="router">
      <Router>
        <div className="links">
          <Link to="/stories-dashboard" className="home">
            Home
          </Link>
          <Link to="/story-create" className="create">
            Create Story
          </Link>
        </div>

        <Route path="/stories-dashboard" component={StoriesDashboard} />
        <Route path="/story-create" component={StoryPage} />
        <Route path="story-description" component={StoryDescription} />
      </Router>
    </div>
  );
}

export default App;
