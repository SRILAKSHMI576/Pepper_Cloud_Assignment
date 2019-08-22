import React from "react";
import AssignmentTask from "./assignmentTask/assignmentTask";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StoryPage from "./StoryPage/StoryPage";

function App() {
  return (
    <div>
      <AssignmentTask />
      <Router>
        <div>
          <Route path="/story-create" component={StoryPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
