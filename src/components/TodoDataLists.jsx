import React from "react";

const TodoDataLists = ({ val }) => {
  const completeTask = () => {
    console.log("task done");
  };
  const deleteTask = () => {
    console.log("delete task");
  };
  return (
    <div
      className={`w-100 todo_list px-3 d-flex d-lg-flex align-items-center justify-content-between overflow-hidden ${val.styleList}`}
    >
      <p className="todo_para mb-0 fw-regular">{val.para}</p>
      <div>
        <button onClick={deleteTask} className="border-0 bg-transparent p-0">
          {val.deleteIcon}
        </button>
        <button
          onClick={completeTask}
          className="border-0 bg-transparent p-0 ms-3"
        >
          {val.tickIcon}
        </button>
      </div>
    </div>
  );
};

export default TodoDataLists;
