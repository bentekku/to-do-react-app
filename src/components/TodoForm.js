import React, { useState } from "react";

// addTodo is a prop or feeded argument for the function, it's set where its called, in this case it's being set in the TodoWrapper.js
export const TodoForm = ({ addTodo }) => {
  // for search input
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // preventing pushing of empty values into the todo
    searchValue !== ""
      ? addTodo(searchValue)
      : alert("Please enter the task that you wished to be added");
    // setting input value to "" i.e., blank to easy entry of new task
    setSearchValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="text"
        className="todo-input"
        placeholder="What is the task for today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
