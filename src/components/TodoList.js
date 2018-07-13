import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onUpdatedTodo }) => {

  return <div className="TodoList">
    {
      todos.map((todo, index) => <TodoItem todo={ todo } onUpdatedTodo={ onUpdatedTodo } key={index} /> )
    }
  </div>
}

export default TodoList;