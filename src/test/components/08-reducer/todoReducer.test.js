import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from './fixtures/demoTodos';

describe('Pruebas en todo reducer', () => {
    
    test('Debe de retornar el estado por defecto', () => {

        const state = todoReducer( demoTodos, {} );

        expect( state ).toEqual( demoTodos );
        
    });

    test('Debe de agregar un todo', () => {

        const newTodo = { id: 3, desc: 'Aprender Flutter 2.5', done: true };

        const state = todoReducer( demoTodos, { type: 'add', payload: newTodo } );

        expect( state.length ).toBe(3);
        expect( state ).toEqual([ ...demoTodos, newTodo ]);
        
    });

    test('Debe de borrar un todo', () => {
        
        const state = todoReducer( demoTodos, { type: 'remove', payload: 1 } );

        expect( state.length ).toBe(1);
        expect( state ).toEqual( [ demoTodos[1] ] );
        
    });

    test('Debe de hacer el toggle del todo', () => {
        
        const state = todoReducer( demoTodos, { type: 'toggle', payload: 1 } );
        
        expect( state[0].done ).toBe( true );
        expect( state[1] ).toEqual( demoTodos[1] );

    });
    
    
});



