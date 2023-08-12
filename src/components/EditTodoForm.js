import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  // for search input
  const [searchValue, setSearchValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    // preventing pushing of empty values into the todo
    searchValue !== ""
      ? editTodo(searchValue, task.id)
      : alert("Todo update can't be empty");
    setSearchValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="text"
        className="todo-input"
        placeholder="Update Task"
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
