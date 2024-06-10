import React from 'react';
import Todoitem from './Todoitem';

const Todolist = ({ todos, removeTodo }) => {
  return (
    <div className='bjk'>
      {todos.map((todo, index) => (
        <Todoitem key={index} index={index} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default Todolist;