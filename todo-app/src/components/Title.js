import React, { useState, useReducer } from "react";

import { reducer, initialState } from "../reducers/titleReducer";

const Title = () => {
  const [titleState, dispatch] = useReducer(reducer, initialState);

  // const [title, setTitle] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);
  const [newTitleText, setNewTitleText] = useState("");

  const handleChanges = e => {
    dispatch({ type: "UPDATE_INPUT_TEXT " });
    setNewTitleText(e.target.value);
  };

  return (
    <div className="titleBox">
      {!titleState.editing ? (
        <h1 onClick={() => dispatch({ type: "TOGGLE_EDIT" })}>
          {titleState.title}
        </h1>
      ) : (
        <div className="setTitle">
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: "UPDATE_TITLE", payload: newTitleText });
              dispatch({ type: "TOGGLE_EDIT" });
            }}
          >
            Set List Name
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;
