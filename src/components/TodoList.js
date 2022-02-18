import React, { useEffect } from "react";
import { useStore, useDispatch } from "../store/StoreProvider";
import Todo from './Todo';
import types from '../store/types';

const TodoList = ()=>{
  const { todos, getTodos } = useStore();
  const dispatch = useDispatch();

  useEffect(() => {
        const listTodos = getTodos();
        dispatch({
            type:types.GET_TODOS,
            payload: listTodos
        });
    }, []);

    const setTodoEdit = (todo)=>{
        dispatch({
            type: types.SET_TODO_EDIT,
            payload: todo
        });
    };
    const todoDelete=(todoDelete)=>{
        const changedTodos = todos.filter(f=>f.id !== todoDelete.id);
        dispatch({
            type: types.DELETE_TODO,
            payload: changedTodos
        })
    };
    const todoToogleCompleted = (todoId)=>{
        const changedTodos=todos.map(todo=>(
          todo.id === todoId
          ? {...todo, completed:!todo.completed}
          :todo));

          dispatch({
            type: types.TODO_TOOGLE_COMPLETED,
            payload: changedTodos
        })
    };

  return (
    <div>
        <h1>Soy todo list</h1>
         {
           todos.lengh === 0
           ?(<div className="alert alert-primary">
               No hay tareas. Por favor agrega una :)
             </div>
           )
           :
            todos.map(todo=>(
                <Todo
                todo={todo}
                key={todo.id}
                todoDelete={todoDelete}
                todoToogleCompleted={todoToogleCompleted}
                setTodoEdit={setTodoEdit}
                ></Todo>
            ))
        }
    </div>
  )
}

export default TodoList;