import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Todo() {
  const [todo, setTodo] = useState('');
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);

  console.log(todo);

  return (
    <>
      <button onClick={() => navigate('/')}>Geri Dön</button>
      <h1>{todo.title}</h1>
      <h2>userId = {todo.userId}</h2>
      <h3>id = {todo.id}</h3>
      <h4>{`Complated = ${todo.completed}`}</h4>
    </>
  );
}
