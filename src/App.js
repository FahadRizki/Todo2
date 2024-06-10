import Todoform from './Todoform';
import Todolist from './Todolist';
import React, { useState } from 'react';
import './App.css';

  const App = () => {
    const [todos, setTodos] = useState([]);
  
    const addTodo = (todo) => {
      setTodos([...todos, todo]);
    };
  
    const removeTodo = (index) => {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
    };
  
    return (
      <div className="App">
        <div className='dds'>
        <h1>Todo List</h1>
        <Todoform addTodo={addTodo} />
        <Todolist todos={todos} removeTodo={removeTodo} />
        </div>
        
      </div>
    );
  };
 


export default App;
