import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
  const [item, setItem] = useState("");

  const handleChanges = e => {
    setItem(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: item
    });
    setItem("");
  };

  return (
    <div className="form">
      <form onSubmit={submitForm}>
        <label htmlFor="todo" hidden>
          To-do
        </label>

        <input name="todo" onChange={handleChanges} value={item} />
        <button>Add To-Do</button>
      </form>
    </div>
  );
};

export default TodoForm;
