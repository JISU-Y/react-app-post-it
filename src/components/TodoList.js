import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { FiPlusCircle } from "react-icons/fi";

//todoList 는 TodoBoard에서 가져온 todos의 배열 중 배열 한 개씩
const TodoList = ({ todoList, addPostit, clearPostit, isMother }) => {
  // 여기서 따로 사용할 todo 배열
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // 추가하려고 하는 todo의 text를 검사
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    // 새 todo와 기존의 todos 배열을 합침
    const newTodos = [todo, ...todos];

    // Todos를 새로 만든 todos 배열로 set함
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <FiPlusCircle className="plus-icon" onClick={() => addPostit(todos)} />
    </div>
  );
};

export default TodoList;
