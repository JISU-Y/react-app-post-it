import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoBoard = () => {
  // todoList -> todo 배열의 배열
  // ['apple', 'avocado', 'ace'], ['banana','bun', 'bowl'], ['cake','cactus'] ... 이렇게 가야함
  const [todoLists, setTodoLists] = useState([[]]);
  // const [isMother, setIsMother] = useState(true);

  // post it 추가
  const addPostit = () => {
    // postit 하나만 있을 때
    if (todoLists.length === 1) {
    }

    const newTodoLists = [[], ...todoLists];

    setTodoLists(newTodoLists);
  };

  return (
    <>
      {todoLists.map((todos, index) => {
        return <TodoList key={index} addPostit={addPostit} />;
      })}
    </>
  );
};

export default TodoBoard;

// mother posts에서만 add post 되도록 구현해야함
// backend 구현해야함 (MERN ? , Firebase? , 일단 Local Storage?)
// Board 안에서 post it 드래그 앤 드랍 할 수 있도록 구현
// 완성된 todo는 밑으로 보내서 해야할 것들이 todo list의 상단에 올라오도록
// css post it 처럼 꾸미기
// todo list 색 바꿀 수 있도록 수정 (오른쪽 마우스 클릭해서 몇 가지 색으로만 바꿀 수 있도록)
