import React, { useState } from "react";
import { todoData } from "./common/Helper";
import TodoDataLists from "./TodoDataLists";

const TodoList = () => {
  const [todoInput, setTodoInput] = useState("");
  const handleInput = (event) => {
    setTodoInput(event.target.value);
  };
  const addTask = () => {
    console.log("add task");
  };
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center todo_bg">
      <div className="container">
        <div className="todo_box mx-auto w-100 px-4 rounded_8">
          <h1 className="todo_heading fw-semibold text-center">Toods</h1>
          <h3 className="sub_heading fw-medium mb-2">Enter Todo</h3>
          <form className="w-100 d-flex rounded-2 overflow-hidden p-1">
            <input
              onChange={handleInput}
              value={todoInput}
              name="todo-input"
              type="text"
              placeholder="Learn html css"
              className="w-100 border-0 px-3 px-sm-4 fw-normal"
            />
            <button className="add_btn rounded-2 text-white fw-semibold border-0">
              Add
            </button>
          </form>
          <div className="list_box rounded_8">
            {todoData.map((val, i) => (
              <TodoDataLists val={val} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
