import React from 'react';
import Todos from './Todos';
import Todo from './Todo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/todos/:id" element={<Todo />} />
    </Routes>
  );
}
