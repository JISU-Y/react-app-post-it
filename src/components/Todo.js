import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos }) => {
  const [edit, setEdit] = useState({ id: null, value: "" });

  return todos.map((todo, index) => (
    <div className="todo-row" key={index}>
      <div key={todo.id}>{todo.text}</div>
      <div className="icons">
        <RiCloseCircleLine className="delete-icon" />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
