import React, { useReducer } from "react";

import Todo from "./Todo";

import TodoForm from "./TodoForm";

import { reducer, todo } from "../reducers/reducer";

const TodoList = props => {
  const [state, dispatch] = useReducer(reducer, todo);

  return (
    <div className="Todo-list">
      <TodoForm dispatch={dispatch} />
      <h2>Current To-Do's:</h2>
      <div className="item">
        <p>
          {state.map(todo => {
            return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
          })}
        </p>
      </div>
    </div>
  );
};

export default TodoList;
