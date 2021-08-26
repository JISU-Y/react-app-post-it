import React, { useState, useEffect, useCallback, useRef } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { TiEdit } from "react-icons/ti";
import { MdDone } from "react-icons/md";
import { ImCross } from "react-icons/im";

//todoList 는 TodoBoard에서 가져온 todos의 배열 중 배열 한 개씩
const TodoList = ({
  todoLists,
  todoList,
  addPostit,
  removePostit,
  editPostit,
}) => {
  // 여기서 따로 사용할 todo 배열
  // todos는 todo ({id:1,text:a}의 모음/배열)
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  // 오른쪽 클릭 좌표
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  // menu 보여주거나 말거나
  const [show, setShow] = useState(false);

  const addTodo = (todo) => {
    // todo는 {id: number, text: textInput} 임
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

  const handleAddPost = () => {
    addPostit(todos);

    // todos 초기화
    setTodos([]);
  };

  const handleEditPost = () => {
    setIsEdit(true);

    setTodos(todoList.todos);
  };

  const handleEditDone = () => {
    setIsEdit(false);
    editPostit(todoList.id, todos);
    setTodos([]); // edit done 하고 add post 하면 todos 그대로 복사해가므로 초기화
  };

  // 색 바꾸기 혹은 오른쪽 클릭 메뉴 생성
  const handleContextMenu = useCallback(
    (e) => {
      e.preventDefault();
      if (e.target.className !== "todo-app") {
        setShow(false);
        return;
      }

      const rect = e.target.getBoundingClientRect();
      const rectX = e.clientX - rect.left; // x position within the element.
      const rectY = e.clientY - rect.top; // y position within the element.

      // setAnchorPoint({ x: e.pageX, y: e.pageY });
      setAnchorPoint({ x: rectX, y: rectY });
      setShow(true);
    },
    [setAnchorPoint, setShow]
  );

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

  const todoAppRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    todoAppRef.current.addEventListener("contextmenu", handleContextMenu);
    return () => {
      // context menu는 각각의 todoList에서 event를 생기게 하고
      // context menu를 없앨때는 어디든 클릭하면 없어져야 하므로 document로 한다
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [handleClick, handleContextMenu]);

  const [colorIndex, setColorIndex] = useState(1); // 이게 중요 / 보통 / 나중 태그로 활용될 수도
  const postColor = ["#ffd20c", "#5d0cff", "#ff7614", "#149fff", "#fa0087"];

  const changeColor = () => {
    setColorIndex((index) => {
      let newIndex = index + 1;
      if (newIndex > postColor.length - 1) {
        newIndex = 0;
      }
      console.log(index);
      console.log(newIndex);
      return newIndex;
    });

    todoAppRef.current.style.backgroundColor = `${postColor[colorIndex]}`;
    setShow(false);
  };

  return (
    <div className="todo-app" ref={todoAppRef}>
      <TodoForm onSubmit={addTodo} />
      <Todo
        // postit이 motherpost일때만 받아적을 수 있도록 todos 해놓고,
        // 나머지는 todoList에 있는 todos 내용 고대로 가져와서 display 한다
        todos={todoList.id === 0 || isEdit ? todos : todoList.todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <FiPlusCircle className="plus-icon" onClick={handleAddPost} />
      {/* postit이 1개 남았을 때(motherpost만 남았을 때/id = 0)는 제거 못하도록 한다 */}
      {todoList.id !== 0 && (
        <FiMinusCircle
          className="minus-icon"
          onClick={() => removePostit(todoList.id)}
        />
      )}
      {todoList.id !== 0 && (
        <TiEdit className="edit-icon postit" onClick={handleEditPost} />
      )}
      {isEdit && <MdDone className="done-icon" onClick={handleEditDone} />}
      {show ? (
        <ul
          className="menu"
          style={{
            top: anchorPoint.y,
            left: anchorPoint.x,
          }}
        >
          <li onClick={handleAddPost}>add</li>
          <li onClick={handleEditPost}>edit</li>
          <li onClick={() => removePostit(todoList.id)}>delete</li>
          <li onClick={changeColor}>changing color</li>
          <hr className="divider" />
          <li>Refresh</li>
          <li onClick={handleClick}>Exit</li>
        </ul>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default TodoList;
