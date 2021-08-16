import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoBoard = () => {
  // todoList -> todo 배열의 배열
  // ['apple', 'avocado', 'ace'], ['banana','bun', 'bowl'], ['cake','cactus'] ... 이렇게 가야함
  const [todoLists, setTodoLists] = useState([[]]);

  // post it 추가
  const addPostit = (todos) => {
    // 추가했던 to do 들 저장하여 todoLists에 옮긴다
    const newTodoLists = [...todoLists, todos];

    // clearPostit(todos);

    setTodoLists(newTodoLists);
  };

  // PostIt 초기화
  const clearPostit = (todos) => {
    todos = [];
  };

  return (
    <>
      {todoLists.map((todoList, index) => {
        return (
          <TodoList
            key={index}
            addPostit={addPostit}
            clearPostit={clearPostit}
          />
        );
      })}
    </>
  );
};

export default TodoBoard;

// mother posts에서만 add post 되도록 구현해야함
// -> 플러스 버튼을 누르면 밑에 생기는게 아니라 원래 있던 자리
// 그니까 왼쪽 상단에 (혹은 정 가운데에) 생기고
// 옮기려고 하는 포스트 잇은 드래그 앤 드랍(일단은 밑에)으로 옮겨지도록
// => 그러려고 했는데 그럴 이유가 굳이 없음. 스티커 메모처럼
// 생성했으면 그 메모에서도  + 하여 생성할 수 있도록 해야함

// backend 구현해야함 (MERN ? , Firebase? , 일단 Local Storage?)
// Board 안에서 post it 드래그 앤 드랍 할 수 있도록 구현
// 완성된 todo는 밑으로 보내서 해야할 것들이 todo list의 상단에 올라오도록
// css post it 처럼 꾸미기
// todo list 색 바꿀 수 있도록 수정 (오른쪽 마우스 클릭해서 몇 가지 색으로만 바꿀 수 있도록)
