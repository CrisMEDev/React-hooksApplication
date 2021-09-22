import React from 'react';
import PropTypes from 'prop-types';

import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos, handleRemove, handleToggle}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, index) =>
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        index={index}
                        handleRemove={handleRemove}
                        handleToggle={handleToggle}
                    />
                )
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}
