import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onUpdatedTodo }) => {
  const toggle = (event) => {
    todo.completed = event.target.checked;
    onUpdatedTodo(todo);
  };

  return <div className="TodoItem">
    <p>
      { todo.text }
    </p>
    <input type="checkbox" checked={ todo.completed } onChange={ toggle } />
  </div>
}

export default TodoItem;