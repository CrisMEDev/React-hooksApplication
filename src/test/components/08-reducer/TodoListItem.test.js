import React from 'react';
import { shallow } from 'enzyme';

import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from './fixtures/demoTodos';

describe('Pruebas en <TodoListItem />', () => {
    
    const handleRemove = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[0]}
            index={0}
            handleRemove={handleRemove}
            handleToggle={handleToggle}
        />
    );

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('Debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
        
    });
    
    test('Debe llamar la función handleRemove con un id', () => {
        
        const id = demoTodos[0].id;

        const button = wrapper.find('button');
        button.simulate('click');

        expect( handleRemove ).toHaveBeenCalledTimes( 1 );
        expect( handleRemove ).toHaveBeenCalledWith( id );
        
    });
    
    test('Debe llamar la función handleToggle con un id', () => {
        
        const id = demoTodos[0].id;

        const p = wrapper.find('p');
        p.simulate('click');

        expect( handleToggle ).toHaveBeenCalledTimes( 1 );
        expect( handleToggle ).toHaveBeenCalledWith( id );
        
    });

    test('Debe de mostrar el texto correctamente', () => {
        
        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe(`${1}. ${demoTodos[0].desc}`);
        
    });

    test('Debe de tener la clase complete si todo.done es true', () => {
        
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo={todo}
                index={0}
                handleRemove={handleRemove}
                handleToggle={handleToggle}
            />

        );
            

        expect( wrapper.find('p').hasClass('complete') ).toBe(true);
    });
    
    
    
});

