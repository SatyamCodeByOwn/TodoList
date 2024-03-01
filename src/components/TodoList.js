import React from "react";

function TodoList(props) {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">{props.item}
        <i className="fa-solid fa-trash" onClick={e=>props.deleteItem(props.index)}></i>
        </li>
      </ul> 
    </div>
  );
}

export default TodoList;
