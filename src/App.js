import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StoryPage from "./StoryPage/StoryPage";
import "./style.css";
import StoriesDashboard from "./StoriesDashboard/StoriesDashboard";
import StoryDescription from "./StoryDescription/StoryDescription";
import LogInPage from "./LoginPage/LoginPage";

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
          <Link to="/login-signup" className="login-signup">
            Login Logout
          </Link>
        </div>

        <Route path="/stories-dashboard" component={StoriesDashboard} />
        <Route path="/story-create" component={StoryPage} />
        <Route path="/story-description" component={StoryDescription} />
        <Route path="/login-logout" component={LogInPage} />
      </Router>
    </div>
  );
}

export default App;
