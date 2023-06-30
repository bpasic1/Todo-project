import React, { useState, useEffect } from 'react';

import './TodoItemGoals.css'

const TodoItemGoals = props => {
  const { id, completed, onDelete, onCompletion } = props;
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleCompletedClick = (event) => {
    setIsCompleted(true);
    event.stopPropagation();
  };

  const handleNotCompletedClick = (event) => {
    setIsCompleted(false);
    event.stopPropagation();
  };

  const deleteHandler = () => {
    onDelete(props.id);
  };

  useEffect(() => {
    setIsCompleted(completed); // Update the isCompleted state when the completed prop changes
  }, [completed]);

  useEffect(() => {
    onCompletion(id, isCompleted);
  }, [isCompleted, id]);

  return (
    <li className="todo-item">
    {!props.completed && <div className="uncheckmark-todo-item" onClick={handleCompletedClick}>
    <span role="img" aria-label="Checkmark" className="uncheckmark-emoji">
        </span></div>}
        {props.completed && <div className="checkmark-todo-item" onClick={handleNotCompletedClick}>
      <span role="img" aria-label="Checkmark" className="checkmark-emoji">✓</span></div>}
      <span className={isCompleted ? 'completed' : ''} >{props.children}</span>
      
      <div id="delete-item" onClick={deleteHandler}>
  <span className="delete-icon">&#10060;</span>
</div>
    </li>
  );
};

export default TodoItemGoals;