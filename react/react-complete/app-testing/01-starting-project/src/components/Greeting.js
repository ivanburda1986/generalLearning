import React from "react";

export const Greeting = () => {
  const [changedText, setChangedText] = React.useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello World</h2>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change text!</button>
    </div>
  );
};
