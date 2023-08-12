import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const TodoWrapper = () => {
  // tracking todos
  const [todos, setTodos] = useState([]);

  // creating a todo objects in the todo array via function and passing neccessary values to it, like randomly generated id
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  // toggling 'completed' class of `p` element upon clicking it
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo
          task={todo}
          key={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};
