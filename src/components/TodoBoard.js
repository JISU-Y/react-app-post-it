import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoBoard = () => {
  const [todoLists, setTodoLists] = useState([]);

  const addPostit = () => {};

  return (
    // <div className="todo-app">
    // </div>
    <>
      <TodoList />
    </>
  );
};

export default TodoBoard;
