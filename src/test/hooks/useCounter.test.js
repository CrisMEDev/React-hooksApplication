import { renderHook, act } from '@testing-library/react-hooks';

import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    
    test('Debe de retornar valores por defecto', () => {

        const { result } = renderHook( () => useCounter());

        const { state, decrement, increment, reset } = result.current

        expect( state ).toBe( 10 );
        expect( typeof increment ).toBe( 'function' );
        expect( typeof decrement ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
        
    });

    test('Debe de retornar el counter en 100', () => {

        const { result } = renderHook( () => useCounter(100));

        const { state, decrement, increment, reset } = result.current

        expect( state ).toBe( 100 );
        
    });

    test('Debe de incrementar el counter en 1', () => {
        
        const { result } = renderHook( () => useCounter(100));

        const { increment } = result.current;
        
        act( () => {
            
            increment();
            
        });

        const { state } = result.current;
        expect( state ).toBe(101);
        
    });
    
    test('Debe de decrementar el state en 1', () => {

        const { result } = renderHook( () => useCounter());

        const { decrement } = result.current;

        act( () => {

            decrement();

        });

        const { state } = result.current;
        expect( state ).toBe( 9 );
        
    });

    test('Debe de restablecer el state en 100', () => {

        const { result } = renderHook( () => useCounter(100));

        const { decrement, reset } = result.current;

        act( () => {

            decrement();
            reset();

        });

        const { state } = result.current;
        expect( state ).toBe( 100 );
        
    });

});
