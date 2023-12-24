import React, { useState } from "react";
import Story from "./Story";
import Form from "./Form";

const Madlib = () => {
  const [viewForm, toggleViewForm] = useState(true);
  const [words, setWords] = useState({});

  const addWordsOnSubmit = (newWords) => {
    setWords({ ...newWords });
    toggleForm();
  };
  const toggleForm = () => {
    toggleViewForm((form) => !form);
  };
  return (
    <div>
      <h1>Madlibs</h1>
      {viewForm ? (
        <Form addWordsOnSubmit={addWordsOnSubmit} />
      ) : (
        <Story words={words} toggleForm={toggleForm} />
      )}
    </div>
  );
};
export default Madlib;
