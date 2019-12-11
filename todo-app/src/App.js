import React from "react";
import "./components/Todo.css";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <h1>The To-Do List©</h1>
      <div className="App">
        <TodoList />
      </div>
    </>
  );
}
export default App;
