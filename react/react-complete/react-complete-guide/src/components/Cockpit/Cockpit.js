import React from "react";
import classes from "./Cockpit.css";
const cockpit = (props) => {
  const assignedClassed = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClassed.push(classes.red); // classes: ['red]
  }
  if (props.persons.length <= 1) {
    assignedClassed.push(classes.bold); //classes: ['red', 'bold]
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hello World from React!</h1>
      <p className={assignedClassed.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
    </div>
  );
};

export default cockpit;