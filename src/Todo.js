import React from "react";

const Todo = ({ todos, deleteTodo }) => {
  const todosList = todos.length ? (
    todos.map((todo) => {
      return (
        <li
          className="list-group-item"
          key={todo.id}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          {todo.content}
        </li>
      );
    })
  ) : (
    <li className="list-group-item"> Nothing TODO</li>
  );
  return <ul className="list-group">{todosList}</ul>;
};

export default Todo;
