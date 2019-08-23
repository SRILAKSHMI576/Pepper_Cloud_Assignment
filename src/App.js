import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StoryPage from "./StoryPage/StoryPage";
import "./style.css";
import StoriesDashboard from "./StoriesDashboard/StoriesDashboard";
import StoryDescription from "./StoryDescription/StoryDescription";
import LoginSignup from "./LoginSignup/LoginSignup";

function App() {
  return (
    <div className="router">
      <div className="example">
        <div className="mobile-only">I'm a fancy mobile div</div>
        <div className="desktop-only">I'm a heavy desktop div</div>
      </div>
      <Router>
        <div className="links">
          <Link to="/login-signup" className="login-signup">
            Login
          </Link>
          <Link to="/stories-dashboard" className="home">
            Home
          </Link>
          <Link to="/story-create" className="create">
            Create Story
          </Link>
          <Link to="login-signup" className="logged-out">
            You are logged out please login
          </Link>
        </div>

        <Route path="/login-signup" component={LoginSignup} />
        <Route path="/stories-dashboard" component={StoriesDashboard} />
        <Route path="/story-create" component={StoryPage} />
        <Route path="/story-description" component={StoryDescription} />
      </Router>
    </div>
  );
}

export default App;
