import React, { useState } from "react";

const Form = ({ addWordsOnSubmit }) => {
  const INITIAL_STATE = { adjective: "", adjective2: "", noun: "", place: "" };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addWordsOnSubmit({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="adjective">adjective</label>
        <input
          id="adjective"
          type="text"
          placeholder="adjective"
          name="adjective"
          value={formData.adjective}
          onChange={handleChange}
        ></input>

        <label htmlFor="adjective2">adjective</label>
        <input
          id="adjective2"
          type="text"
          placeholder="adjective"
          name="adjective2"
          value={formData.adjective2}
          onChange={handleChange}
        ></input>

        <label htmlFor="noun">noun</label>
        <input
          id="noun"
          type="text"
          placeholder="noun"
          name="noun"
          value={formData.noun}
          onChange={handleChange}
        ></input>

        <label htmlFor="place">place</label>
        <input
          id="place"
          type="text"
          placeholder="place"
          name="place"
          value={formData.place}
          onChange={handleChange}
        ></input>
        <button>Create Story</button>
      </form>
    </div>
  );
};

export default Form;
