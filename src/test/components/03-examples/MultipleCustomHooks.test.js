import React from 'react';
import { shallow } from "enzyme";

import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks />', () => {
    
    beforeEach( () => {

        // Implementación del mock como si fuera useCounter
        useCounter.mockImplementation( () => {
            return {
                state: 10,
                increment: ()=>{}
            }
        });

    });

    test('Debe de mostrarse correctamente', () => {
        
        // Implementación del mock como si fuera useFetch
        useFetch.mockImplementation( () => {
            return {
                data: null,
                loading: true,
                error: null
            }
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de mostrar la información', () => {

        // Implementación del mock como si fuera useFetch
        useFetch.mockImplementation( () => {
            return {
                data: [{
                    author: 'Cristian',
                    quote: 'Hola mundo'
                }],
                loading: false,
                error: null
            }
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'Hola mundo' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'Cristian' );

    })
    
    
});

