import React, { useState } from "react";

export default function TodoListLandingPage() {
  const [newTodo, setNewTodo] = useState("");

  const [todos, setTodos] = useState([]);

  function handleNewTodoChange(e) {
    e.preventDefault();
    setNewTodo(e.target.value);
  }

  function handleNewTodo(e) {
    e.preventDefault();
    if (newTodo === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    e.target.reset();
  }

  function removeTodos(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <h1 className="list-title">Todo List</h1>
      <form onSubmit={handleNewTodo}>
        <label>
          Todos
          <br />
          <input placeholder="Your todos....." onChange={handleNewTodoChange} />
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                {todo.text}
                <a href="#" onClick={() => removeTodos(todo.id)}>
                  {" "}
                  Remove
                </a>
              </li>
            ))}
          </ul>
        </label>
      </form>
    </div>
  );
}
