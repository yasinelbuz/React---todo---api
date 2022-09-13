import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TodoCard({ todos }) {
  let navigate = useNavigate();

  return (
    <>
      <div
        style={{
          backgroundColor: '#efefef',
          padding: '10px',
          margin: '10px',
          width: '150px',
          height: '150px',
          fontSize: '24px',
          cursor: 'pointer',
        }}
        onClick={() => navigate(`/todos/${todos.id}`)}
      >
        {todos.title}
      </div>
    </>
  );
}
