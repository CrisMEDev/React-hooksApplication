import { renderHook, act } from '@testing-library/react-hooks';

import { useForm } from '../../hooks/useForm';

describe('Pruebas en custom hook useForm', () => {

    const initialForm = {
        name: 'Cristian',
        email: 'test1@test.com',
    };

    test('Debe de regresar un formulario por defecto', () => {
        const { result } = renderHook( () => useForm(initialForm) );

        const [ formValues, handleInputChange, reset ] = result.current;

        expect(formValues).toEqual(initialForm);
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');

    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;

        act( () => {
            
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Aurora'
                }
            });

        });

        const [ formValues ] = result.current;

        expect( formValues.name ).toBe('Aurora');

    });

    test('Debe de reestablecer el formulario con reset', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [, handleInputChange, reset] = result.current;

        act( () => {

            handleInputChange({
                target: {
                    name: 'email',
                    value: 'test2@test.com'
                }
            });

            reset();

        });

        const [ formValues ] = result.current;

        expect(formValues).toBe( initialForm );

    });
    
    
});


