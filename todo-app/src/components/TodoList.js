import React, { useReducer } from "react";
import Title from "./Title.js";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { reducer, todo } from "../reducers/reducer";

const TodoList = props => {
  const [state, dispatch] = useReducer(reducer, todo);
  // const [completedCount, setCompletedCount] = useState();
  // setCompletedCount(
  //   () => document.getElementsByClassName("todo.completed").length
  // );

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };
  return (
    <div className="todo-list">
      <TodoForm dispatch={dispatch} /> <Title />
      <div className="item">
        <ol>
          {state.map(todo => {
            return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
          })}
        </ol>
      </div>
      <h3>
        List total: {state.length} To do's{" "}
        {
          //and {completedCount}
          //completed To-Do's}
        }
      </h3>
      <button onClick={clearCompleted}> Clear Completed </button>
    </div>
  );
};

export default TodoList;
