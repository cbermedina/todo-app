import React,{useState, useEffect} from "react";
import { useDispatch, useStore } from "../store/StoreProvider";
import types from "../store/types";
const initialFormValues={
    title:'',
    description:'',
};
const TodoForm = ()=>{
    const dispatch = useDispatch();
    const { todoEdit } = useStore();
    const [formValues, setFormValues] = useState(initialFormValues);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        if (todoEdit) {
            setFormValues(todoEdit);
        }
    }, [todoEdit]);

    const {title, description} = formValues;
    const handleChange=(e)=>{
        const changedFormValues={
            ...formValues,
            [e.target.name]: e.target.value
        };
        setFormValues(changedFormValues);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.trim()===''){
            setError('Debe indicar un titulo');
            return;
        }
        if(description.trim()===''){
            setError('Debe indicar una descripcion');
            return;
        }
        if(todoEdit){
            dispatch({
                type: types.UPDATE_TODO,
                payload: formValues,
            });
            setSuccessMessage('Todo actualizado con exito');
        }
        else {
            dispatch({
                type: types.CREATE_TODO,
                payload: {
                    id: Date.now(),
                    ...formValues,
                    completed: false,
                }
            });
            setSuccessMessage('Todo agregado con exito');
            setFormValues(initialFormValues);
        }

        setTimeout(()=>setSuccessMessage(null),2000)
        setError(null);
    };
    const resetEdit = (todo)=>{
        setFormValues(initialFormValues);
        dispatch({
            type: types.SET_TODO_EDIT,
            payload: todo
        })
    }
return (<div>
    <h1>{ todoEdit?'Editar tarea':'Nueva tarea' }</h1>
    {
        todoEdit&&<button className="btn btn-warning mb-2"onClick={()=>{resetEdit(null)}}>Cancelar edición</button>
    }
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Titulo"
            className="form-control"
            value={title}
            name="title"
            onChange={handleChange}
        />
        <textarea
            placeholder="Nueva tarea"
            className="form-control mt-2"
            value={description}
            name="description"
            onChange={handleChange}
        />
        <button
            type="submit"
            className="btn btn-primary btn-block mt-2">{ todoEdit?'Actualizar tarea':'Crear tarea' }</button>
    </form>
    {
        error&&(<div className="alert alert-danger">
        {error}
        </div>)
    }
    {
        successMessage&&(<div className="alert alert-success">
            {successMessage}
        </div>)
    }
</div>)
}
export default TodoForm;