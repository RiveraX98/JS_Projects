import React from "react";

const Story = ({ words, toggleForm }) => {
  return (
    <>
      <h3>
        A {words.adjective} princess wore a {words.adjective2} {words.noun} to
        the {words.place}
      </h3>
      <button onClick={toggleForm}>Try Again</button>
    </>
  );
};

export default Story;
