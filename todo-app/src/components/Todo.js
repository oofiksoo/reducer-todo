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
        backgroundColor: todo.completed ? "red" : "",
        fontStyle: todo.completed ? "italic" : ""
      }}
    >
      <p>{todo.item}</p>
    </div>
  );
}

export default Todo;
