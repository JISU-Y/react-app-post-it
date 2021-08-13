import TodoBoard from "./components/TodoBoard";

function App() {
  return (
    <div className="container">
      <h1 className="title">What's the Plan for Today?</h1>
      <div className="todo-board">
        <TodoBoard />
      </div>
    </div>
  );
}

export default App;
