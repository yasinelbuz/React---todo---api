import React, { useEffect, useState } from 'react';
import TodoCard from './TodoCard';

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <>
      <h1>Todo List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {todos.map((todo) => (
          <TodoCard todos={todo} />
        ))}
      </div>
    </>
  );
}
