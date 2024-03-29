import * as React from "react";
import { BrowserRouter as Router, Link, Route, useParams, Switch } from "react-router-dom";

/*
  Create two Routes so that the given navigation works and the proper UI is displayed.

  When the user navigates to /tyler, they should see "Student: tyler".
  When the user navigates to /invoices/1, they should see "Invoice #1".
*/

const Student = () => {
  const { student } = useParams();
  return <h3>Student: {student}</h3>;
};

const Invoice = () => {
  const { id } = useParams();
  return <h3>Invoice #{id}</h3>;
};

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <h2>Invoices</h2>
        <ul>
          <li>
            <Link to="/invoices/1">1</Link>
          </li>
          <li>
            <Link to="/invoices/2">2</Link>
          </li>
          <li>
            <Link to="/invoices/3">3</Link>
          </li>
          <li>
            <Link to="/invoices/4">4</Link>
          </li>
        </ul>

        <h2>Students</h2>
        <ul>
          <li>
            <Link to="/tyler">Tyler</Link>
          </li>
          <li>
            <Link to="/jake">Jake</Link>
          </li>
          <li>
            <Link to="/mikenzi">Mikenzi</Link>
          </li>
        </ul>

        <hr />

        {/* Routes go here */}
        <Switch>
          <Route path="/invoices/:id" component={Invoice} />
          <Route path="/:student" component={Student} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}
