import React, { useState } from 'react';
import "./App.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText !== '') {
      setListTodo([...listTodo, inputText]);
    }
  }

  const deleteListItem = (index) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(index, 1);
    setListTodo(newListTodo); // Corrected this line
  }

  return (
    <div>
      <TodoInput addList={addList} />
      <h1>Todo List</h1><hr />
      {listTodo.map((listItem, i) => {
        return (
          <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
        );
      })}
    </div>
  );
}

export default App;
