import './App.css';
import { useState, useEffect } from 'react';
import TodoListGoals from './components/TodoListGoals/TodoListGoals';
import TodoInput from './components/TodoInput/TodoInput';
import TodoFooter from './components/TodoFooter/TodoFooter';

function App() {

  const [todoGoals, setTodoGoals] = useState([
    {
      "id": 1,
      "title": "Otići na trening",
      "completed": false
    },
    {
      "id": 2,
      "title": "Rezervacija filma u 10",
      "completed": false
    },
    {
      "id": 3,
      "title": "Pogledati grešku vezanu za task",
      "completed": false
    },
    {
      "id": 4,
      "title": "Pročitati 10 stranica knjige",
      "completed": true
    },
    {
      "id": 5,
      "title": "Otići po papire",
      "completed": false
    }]);

    const [filter, setFilter] = useState('all');

    const deleteItemHandler = todoID => {
      setTodoGoals(prevTodos => {
        const updatedTodo = prevTodos.filter(todo => todo.id !== todoID);
        return updatedTodo;
      });
    };

    const handleTodoItemCompletion = (itemId, completed) => {
      setTodoGoals(prevTodoGoals => {
        return prevTodoGoals.map(todoItem => {
          if (todoItem.id === itemId) {
            return { ...todoItem, completed };
          }
          return todoItem;
        });
      });
    };

    useEffect(() => {
      console.log(todoGoals);
    }, [todoGoals]);

    const addGoalHandler = enteredText => {
      setTodoGoals(prevTodos => {
        const updatedTodos = [...prevTodos];const newId = prevTodos.length > 0 ? Math.max(...prevTodos.map(todo => todo.id)) + 1 : 1;
        updatedTodos.push({ id: newId, title: enteredText, completed: false });
        return updatedTodos;
      });
    };

    const getUncompletedCount = () => {
      return todoGoals.filter(todo => !todo.completed).length;
    };

    const getCompletedCount = () => {
      return todoGoals.filter(todo => todo.completed).length;
    };

    const deleteCompletedItems = () => {
      setTodoGoals((prevTodos) => {
        return prevTodos.filter((todo) => !todo.completed);   //vraca samo nekompletirane, a kompletirane ignorise
      });
    };

    const setAllItemsCompleted = () => {
      const updatedTodos = todoGoals.map(todo => {
        return { ...todo, completed: true };
      });
      setTodoGoals(updatedTodos);
    };

    const filterItems = (filter) => {
      setFilter(filter);
    };

    const filteredTodoGoals = () => {
      if (filter === 'completed') {
        return todoGoals.filter((todo) => todo.completed);
      } else if (filter === 'uncompleted') {
        return todoGoals.filter((todo) => !todo.completed);
      }
      return todoGoals;
    };

    let content = (
      <p id="todo-is-empty-text"style={{ textAlign: 'center' }}>Todo list is empty!</p>
    );
  
    if (filteredTodoGoals().length > 0) {
      content = (
        <TodoListGoals
          items={filteredTodoGoals()}
          onDeleteItem={deleteItemHandler}
          onCompletion={handleTodoItemCompletion}
        />
      );
    }

  return (
    <div id="todo-background">
    <h1 id="todo-h1">todos</h1>
      <section id="todos">
      <TodoInput 
        onAddGoal={addGoalHandler} 
        setAllItemsCompleted={setAllItemsCompleted}/>
        {content}
      <TodoFooter 
        completedCount={getCompletedCount()}
        uncompletedCount={getUncompletedCount()} 
        deleteCompletedItems={deleteCompletedItems}
        showAll={() => filterItems('all')}
        showCompleted={() => filterItems('completed')}
        showUncompleted={() => filterItems('uncompleted')}/>
      </section>
      {/* <button onClick={setAllItemsCompleted}>Set All Completed</button> */}
    </div>
  );
}

export default App;
