import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoBoard = () => {
  // todoList -> todo 배열의 배열
  const [todoLists, setTodoLists] = useState([
    ["apple", "acorn"],
    ["banana", "basement", "bamboo"],
    ["case"],
  ]);

  // post it 추가
  const addPostit = () => {
    const todoList = [];
    const newTodoLists = [todoList, ...todoLists];

    setTodoLists(newTodoLists);
  };

  return (
    // <div className="todo-app">
    // </div>
    <>
      {/* <TodoList /> */}
      {todoLists.map((todos, index) => {
        console.log(index);
        return <TodoList key={index} todos={todos} />;
      })}
      <button onClick={addPostit}>add post it</button>
    </>
  );
};

export default TodoBoard;
