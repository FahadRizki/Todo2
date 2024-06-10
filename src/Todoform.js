import React, { useState } from 'react';

const Todoform = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo({
      text: value,
      isCompleted: false
    });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='fgh'
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Todoform;