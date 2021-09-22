import React from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ({todo, index, handleRemove, handleToggle}) => {
    return (
        <li
            key={todo.id}
            className="list-group-item"
        >
            <p
                onClick={() => { handleToggle(todo.id) }}
                className={`text-center non-selectable ${todo.done && 'complete'}`}>
                {index + 1}. {todo.desc}
            </p>

            <button
                onClick={() => handleRemove(todo.id)}
                className="btn btn-outline-danger" >
                Borrar
            </button>
        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}
