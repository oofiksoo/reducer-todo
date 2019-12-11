import React from "react";

function Todo({ todo, dispatch }) {
  const toggleCompleted = () => {
    dispatch({
      type: "TOGGLE_COMPLETED",

      payload: todo.id
    });
  };

  console.log(todo);
  return (
    <div
      onClick={toggleCompleted}
      className={`todo${todo.completed ? "completed" : ""}`}
      style={{
        textDecoration: todo.completed ? "line-through" : "",
        color: todo.completed ? "red" : "",
        fontStyle: todo.completed ? "italic" : "",
        opacity: todo.completed ? "0.5" : "",
        fontWeight: todo.completed ? "bolder" : ""
      }}
    >
      <li> {todo.item} </li>
    </div>
  );
}

export default Todo;
