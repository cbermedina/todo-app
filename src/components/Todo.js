import React from "react";

const Todo = ({todo, todoToogleCompleted, setTodoEdit, todoDelete})=>{

  return (<div className="card">
  <div className="card-body">
    <h3 className="card-title text-right">
    {todo.title}
    <button
    className={`btn btn-sm btn${todo.completed?'-outline':''}-success ml-2`}
    onClick={()=>todoToogleCompleted(todo.id)}
    >
    {todo.completed?'Terminado':'Terminar'}
    </button>
    </h3>
    <p className="card-text text-right">
    {todo.description}
    </p>
    <br />
    <div className="d-flex justify-content-end">
        <button
        className="btn btn-sm btn-outline-primary mr-2"
        onClick={()=> setTodoEdit(todo) }
        >
        Editar
        </button>
        <button
        className="btn btn-sm btn-outline-danger mr-2"
        onClick={()=> todoDelete(todo) }>
        Eliminar
        </button>
    </div>
</div>
</div>);
}

export default Todo;