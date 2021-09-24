import React, { useEffect, useReducer } from 'react';

import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';
import { TodoAdd } from './TodoAdd';

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

    const handleAddTodo = ( newTodo ) => {

        dispatch({
            type: 'add',
            payload: newTodo
        }); // dispatch usado para usar la action

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
                    
                    <TodoAdd handleAddTodo={handleAddTodo} />

                </div>
                
            </div>

        </div>
    )
}
