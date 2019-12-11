import React, { useReducer } from "react";
import Title from "./Title.js";
import Todo from "./Todo";

import TodoForm from "./TodoForm";

import { reducer, todo } from "../reducers/reducer";

const TodoList = props => {
  const [state, dispatch] = useReducer(reducer, todo);
  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };
  return (
    <div className="Todo-list">
      <TodoForm dispatch={dispatch} />
      <Title />
      <div className="item">
        <p>
          {state.map(todo => {
            return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
          })}
        </p>
      </div>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoList;
