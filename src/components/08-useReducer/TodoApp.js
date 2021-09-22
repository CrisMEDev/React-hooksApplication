import React, { useEffect, useReducer } from 'react';

import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';

// La funcion init se llama y lo que retorne será el initialState
const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];

    // Si hay elementos retornalos, si es null devuelve un array vacio
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    // El dispatch ayuda a disparar las acciones hacia el reducer
    const [ todosState, dispatch ] = useReducer( todoReducer, [], init );

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });
    
    // Si los todos cambian significa que se debe actualizar el local storage
    useEffect(() => {
        
        localStorage.setItem('todos', JSON.stringify(todosState));

    }, [todosState]);

    const handleRemove = ( todoId ) => {
        
        const action = {
            type: 'remove',
            payload: todoId
        };

        dispatch( action );

    }

    const handleToggle = ( todoId ) => {
        
        dispatch({ type: 'toggle', payload: todoId });

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( description.trim().length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch( action ); // dispatch usado para usar la action

        reset();    // Para limpiar la caja del input

    }

    return (
        <div>
            <h1>TODO App  ({ todosState.length })</h1>
            <hr />

            <div className="row">
                
                <div className="col-7">
                    <TodoList todos={todosState} handleRemove={handleRemove} handleToggle={handleToggle} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            placeholder="Escribe un TODO"
                            autoComplete="off"
                            value={ description }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2 w-100"
                        >
                            Agregar
                        </button>
                    </form>

                </div>
                
            </div>

        </div>
    )
}
