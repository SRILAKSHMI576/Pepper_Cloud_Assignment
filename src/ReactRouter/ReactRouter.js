import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function ReactRouter() {
  return (
    <div>
      <Router>
        <div>
          <Route path="/calculator" component={Calculator} />
        </div>
      </Router>
    </div>
  );
}

export default ReactRouter;
