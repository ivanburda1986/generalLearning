/*
  In the styles.css file, you're given the following styles

    .fade-enter {
      opacity: 0;
      z-index: 1;
    }

    .fade-enter.fade-enter-active {
      opacity: 1;
      transition: opacity 250ms ease-in;
    }

    .fade-exit {
      opacity: 0;
    }
  
  Using TransitionGroup and CSSTransition (which are already imported)
  add animations to your route transitions.
*/

import * as React from "react";
import { BrowserRouter as Router, Route, Link, useParams, useRouteMatch, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const newsletters = [
  {
    name: "React Newsletter",
    id: "react",
    description: "The free, weekly newsletter of the best React news, articles, projects, and more.",
    issues: [
      {
        name: "#1",
        id: "1",
        links: [
          {
            title: "Why React Hooks?",
            url: "https://ui.dev/why-react-hooks/",
          },
          {
            title: "React Render Props",
            url: "https://ui.dev/react-render-props/",
          },
          {
            title: "React Higher-order Components",
            url: "https://ui.dev/react-higher-order-components/",
          },
        ],
      },
      {
        name: "#2",
        id: "2",
        links: [
          {
            title: "Compiling vs Polyfills with Babel",
            url: "https://ui.dev/compiling-polyfills/",
          },
          {
            title: "Build your own React Router v4",
            url: "https://ui.dev/build-your-own-react-router-v4/",
          },
          {
            title: "React AHA Moments",
            url: "https://ui.dev/react-aha-moments/",
          },
        ],
      },
    ],
  },
  {
    name: "UI Newsletter",
    id: "ui",
    description: "The free, weekly newsletter of the best UI news, articles, projects, and more.",
    issues: [
      {
        name: "#1",
        id: "1",
        links: [
          {
            title: "Computed Property Names in JavaScript",
            url: "https://ui.dev/computed-property-names/",
          },
          {
            title: "Imperative vs Declarative Programming",
            url: "https://ui.dev/imperative-vs-declarative-programming/",
          },
          {
            title: "AngularJS: Factory vs Service vs Provider",
            url: "https://ui.dev/angularjs-factory-vs-service-vs-provider/",
          },
        ],
      },
      {
        name: "#2",
        id: "2",
        links: [
          {
            title: "Shorthand Property and Method Names in JavaScript",
            url: "https://ui.dev/shorthand-properties/",
          },
          {
            title: "JavaScript Inheritance vs Composition",
            url: "https://ui.dev/javascript-inheritance-vs-composition/",
          },
          {
            title: "var vs let vs const in JavaScript",
            url: "https://ui.dev/var-let-const/",
          },
        ],
      },
    ],
  },
];

function Issue({ issues }) {
  const { issue } = useParams();

  const { name, links } = issues.find(({ id }) => id === issue);

  return (
    <div>
      <h3>{name}</h3>
      <ul>
        {links.map(({ title, url }) => (
          <li key={title}>
            <a href={url}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Publication() {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const { name, description, issues } = newsletters.find((news) => news.id === id);

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>

      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <Link to={`${url}/${issue.id}`}>{issue.name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${path}/:issue`}>
        <Issue issues={issues} />
      </Route>
    </div>
  );
}

function Newsletters() {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Newsletters</h1>
      <ul>
        {newsletters.map(({ name, id, description }) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{name}</Link>
            <p>{description}</p>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${path}/:id`}>
        <Publication />
      </Route>
    </div>
  );
}

function Home() {
  return <h1>HOME</h1>;
}

function Content() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition timeout={1500} key={location.key} classNames="fade">
        <Switch location={location}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/newsletters">
            <Newsletters />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default function App() {
  return (
    <Router>
      <div style={{ width: 1000, margin: "0 auto" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/newsletters">Newsletters</Link>
          </li>
        </ul>

        <hr />

        <Content />
      </div>
    </Router>
  );
}
