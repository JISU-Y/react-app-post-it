import React, { useState, useEffect, useCallback, useRef } from "react";
import TodoBoard from "./components/TodoBoard";

function App() {
  const board = useRef();

  return (
    <div className="container">
      <h1 className="title">What's the Plan for Today?</h1>
      <div className="todo-board">
        <TodoBoard ref={board} />
      </div>
    </div>
  );
}

export default App;
