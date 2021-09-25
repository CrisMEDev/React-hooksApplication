import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";

import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "./fixtures/demoTodos";

describe('Pruebas en <TodoApp />', () => {

    const wrapper = shallow( <TodoApp /> );

    Storage.prototype.setItem = jest.fn( () => {});
    
    test('Debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
        
    });
    
    test('Debe de agregar todos', () => {
        
        const wrapper = mount( <TodoApp /> );
        
        act( () => {
            // Se manda el primer todo a la referencia de la funcion en TodoAdd
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
        });

        expect( wrapper.find('h1').text().trim() ).toBe('TODO App  (2)');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);

    });

    test('Debe de eliminar un todo', () => {
        
        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
        expect( wrapper.find('h1').text().trim() ).toBe('TODO App  (1)');

        wrapper.find('TodoList').prop('handleRemove')( demoTodos[0].id );
        expect( wrapper.find('h1').text().trim() ).toBe('TODO App  (0)');
        

    });
    
    
    
});


