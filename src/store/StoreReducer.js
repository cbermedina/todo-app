import getTodos from "./Todos";
import types from './types'

const initialStore ={
    todos: [],
    todoEdit: null,
    getTodos,
};

const storeReducer = (state, action)=>{
    const { type, payload } = action;
    switch (type) {
    case types.CREATE_TODO:
        return{
            ...state,
            todos: [payload, ...state.todos],
        };
    case types.UPDATE_TODO:
        return{
            ...state,
            todos: state.todos.map(todo=>(
                todo.id === payload.id
                ? payload
                :todo)),
        };
    case types.SET_TODO_EDIT:
        return{
            ...state,
            todoEdit: payload,
        };
    case types.DELETE_TODO:
        return{
            ...state,
            todos: payload,
        };
    case types.GET_TODOS:
        return {
            ...state,
            todos: payload
        }
    case types.TODO_TOOGLE_COMPLETED :
        return {
            ...state,
            todos: payload
        }
    default:
        return state;
    }
};
export {initialStore, types};
export default storeReducer;