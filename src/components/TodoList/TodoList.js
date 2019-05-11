import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, handleDelete }) => (
  <div>
    <h3>Lista de ToDos</h3>
    {todos.map((todo,index) => (
      // todo lo que querramos que se interprete como javascript, usar {}
      <TodoListItem key={index} {...todo} handleDelete={(e)=>handleDelete(e,index)}/>
    ))}
    
  </div>
);

export default TodoList;
