import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => this.setState({ title: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChange} //this.onChange could be also this.priZmene, simply it is just a name of a method
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
