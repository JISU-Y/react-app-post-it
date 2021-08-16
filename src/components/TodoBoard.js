import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

const TodoBoard = () => {
  // todoList -> todo 배열의 배열
  // ['apple', 'avocado', 'ace'], ['banana','bun', 'bowl'], ['cake','cactus'] ... 이렇게 가야함

  const [todoLists, setTodoLists] = useState([{ id: 0, todos: [] }]);

  // post it 추가
  const addPostit = (todos) => {
    // todos는 [ {id:1234, text: input}, {id:1234, text: input}, {id:1234, text: input}, ... ,{} ]
    // 추가했던 to do 들 저장하여 todoLists에 옮긴다

    // { id: null, todos: [] } 이거 하나 -> 이것의 배열의 위에 있는 todoLists

    const newTodoList = {
      // 0은 motherPost 꺼임
      id: Math.floor(Math.random() * 10000 + 1),
      todos: todos,
    };

    const newTodoLists = [...todoLists, newTodoList];

    setTodoLists(newTodoLists);

    console.log(newTodoLists);
  };

  // post it Edit

  // PostIt 삭제
  const removePostit = (id) => {
    const removedPost = [...todoLists].filter((todoList) => todoList.id !== id);

    setTodoLists(removedPost);
  };

  return (
    <>
      {todoLists.map((todoList, index) => {
        return (
          <TodoList
            key={index}
            todoList={todoList}
            addPostit={addPostit}
            removePostit={removePostit}
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
// postit 개별 삭제 추가
