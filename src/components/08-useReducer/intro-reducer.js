
const initialState = [{
    id: 1,
    todo: 'Comprar queso',
    done: false
}];

// Recuder con un estado inicial
const todoReducer = ( state = initialState, action ) => {

    if ( action?.type === 'agregar' ){
        return [ ...state, action.payload ];
    }

    return state;

}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

// Usando una action para mutar el estado del state y agregar un nuevo todo
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
};

todos = todoReducer( todos, agregarTodoAction );


console.log(todos);
