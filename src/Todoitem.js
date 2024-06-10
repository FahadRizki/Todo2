import React from 'react';

const Todoitem = ({ todo, index, removeTodo }) => {
  return (
    <div className='mmk'>
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  );
};

export default Todoitem;