import React, { createContext, useEffect, useState } from "react";
// import AllNotes from "./Data";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const todosFromLS = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(todosFromLS);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (id, title, task) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id == id ? { ...todo, title: title, task: task } : todo;
    });
    setTodos(updatedTodos);
    //   localStorage.setItem(todos, JSON.stringify(todos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id != id);
    setTodos(updatedTodos);
    //   localStorage.setItem(todos, JSON.stringify(todos));
  };

  const pinTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id == id) {
        return { ...todo, pinned: !todo.pinned };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, pinTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
