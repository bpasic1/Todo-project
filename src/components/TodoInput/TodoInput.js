import { useState, useRef } from 'react';

import './TodoInput.css'

const TodoInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const inputRef = useRef(null);
  
    const todoInputChangeHandler = event => {
      if (event.target.value.trim().length > 0) {
        setIsValid(true);
      }
      setEnteredValue(event.target.value);
    };
  
    const formSubmitHandler = event => {
      event.preventDefault();
      if (enteredValue.trim().length === 0) {
        setIsValid(false);
        return;
      }
      props.onAddGoal(enteredValue);
      inputRef.current.value = ''; 
      setEnteredValue('');
    };
  
    return (
      <header id="input-todo-form-wrapper">
        <div id="button-all-completed-todo" onClick={props.setAllItemsCompleted}>
          <span className="transformed-text">❯</span>
        </div>
        <form id="input-form" onSubmit={formSubmitHandler}>
          <div id="input-form-group" className={isValid ? '' : 'invalid'}>
            <input type="text" ref={inputRef} onChange={todoInputChangeHandler} placeholder="What needs to be done?" />
            </div>
          {/* <button id="input-submit-button" type="submit">Add Todo</button> */}
        </form>
      </header>
    );
  };
  
  export default TodoInput;