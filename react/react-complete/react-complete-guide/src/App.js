import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 34 },
      { id: "2", name: "Manu", age: 32 },
      { id: "3", name: "Stephanie", age: 28 },
    ], //can be given any name, does not have to be an array, can contain anything
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; //Instead of just a pointer to the state.persons array, by spreading I create a copy of that array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
    console.log(persons);
    console.log(this.state.persons);
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "6px",
      margin: "auto",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes: ['red]
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); //classes: ['red', 'bold]
    }

    return (
      //Notice the two approaches for dealing with an onClick (and similar) events. The second approach with .bind() is recommended because it is more resource-thrifty.
      <StyleRoot>
        <div className="App">
          <h1>Hello World from React!</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
