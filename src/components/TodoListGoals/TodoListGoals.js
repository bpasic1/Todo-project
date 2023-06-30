import React from 'react';

import TodoItemGoals from '../TodoItemGoals/TodoItemGoals';
import './TodoListGoals.css'

const TodoListGoals = props => {
  return (
    <ul className="todo-list">
      {props.items.map(todo => (
        <TodoItemGoals
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          onDelete={props.onDeleteItem}
          onCompletion={props.onCompletion}
        >
          {todo.title}
        </TodoItemGoals>
      ))}
    </ul>
  );
};

export default TodoListGoals;