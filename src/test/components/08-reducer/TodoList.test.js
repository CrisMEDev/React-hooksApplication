import { shallow } from 'enzyme';
import React from 'react';

import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from './fixtures/demoTodos';


describe('Pruebas en el componente <TodoList />', () => {
    
    const handleRemove = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos={demoTodos}
            handleRemove={handleRemove}
            handleToggle={handleToggle}
        />
    );

    test('Debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('Debe tener dos <TodoListItem />', () => {
        
        expect( wrapper.find('TodoListItem').length ).toBe(2);

        expect( wrapper.find('TodoListItem').at(0).prop('handleRemove') ).toEqual( expect.any( Function ) );
        
    });
    
    
});

