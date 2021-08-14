import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoBoard = () => {
  // todoList -> todo 배열의 배열
  const [todoLists, setTodoLists] = useState([[]]);

  // post it 추가
  const addPostit = () => {
    const newTodoLists = [[], ...todoLists];

    setTodoLists(newTodoLists);
  };

  return (
    <>
      {todoLists.map((todos, index) => {
        return <TodoList key={index} todos={todos} addPostit={addPostit} />;
      })}
    </>
  );
};

export default TodoBoard;
