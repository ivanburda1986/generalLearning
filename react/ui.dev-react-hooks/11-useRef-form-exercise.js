import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";


/* -------------------------------------------------- */
/* Logical steps */
/* 
1)create a reference, such as:
const passRef = React.useRef();

2)attach the ref to an element
<input
    placeholder="password"
    type="text"
    ref={passRef}
/>

3)Work with the reference
Get the referenced element:
const password = passRef.current; // <input placeholder="password" type="text"></input>
const password = passRef.current.value; // return the value typed in to the password input field

*/

/* -------------------------------------------------- */

/*
  Instructions:
    You're given the UI for a basic form. Your task is to 
    hook it all up using refs. 

    The `Focus X Input` buttons should focus that specific input
    field.

    The `Submit` button should log `name`, `email`, and `password`
    to the console.

    The `Reset` button should result all of the input fields to 
    empty strings.
*/

function Form() {
  const nameRef = React.useRef();
  const emailRef= React.useRef();
  const passRef = React.useRef();


  const handleSubmit = e => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(name, email, password);
  }

  const handleReset = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    passRef.current.value = "";

  }

  return (
    <React.Fragment>
      <label>
        Name:
        <input
          placeholder="name"
          type="text"
          ref={nameRef}
        />
      </label>
      <label>
        Email:
        <input
          placeholder="email"
          type="text"
          ref={emailRef}
        />
      </label>
      <label>
        Password:
        <input
          placeholder="password"
          type="text"
          ref={passRef}
        />
      </label>

      <hr />

      <button
        onClick={()=>nameRef.current.focus()}
      >
        Focus Name Input
      </button>
      <button
        onClick={() => emailRef.current.focus()}
      >
        Focus Email Input
      </button>
      <button
        onClick={() => {
          passRef.current.focus();
          console.log(passRef.current);
            }
          }
      >
        Focus Password Input
      </button>

      <hr />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </React.Fragment>
  )
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Form />, rootElement);
