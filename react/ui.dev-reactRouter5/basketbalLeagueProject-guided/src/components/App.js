import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Players from "./Players";
import Teams from "./Teams";
import TeamPage from "./TeamPage";
import Articles from "./Articles";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/players">
            <Players />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/:teamId" exact>
            <TeamPage />
          </Route>
          <Route path="/:teamId/articles">
            <Articles />
          </Route>
          <Route path="*">
            <h1 className="text-center">404 Not Found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
