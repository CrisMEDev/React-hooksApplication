import { useEffect, useRef, useState } from 'react';

export const useFetch = ( url ) => {
    
    const isMounted = useRef(true);
    
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        return () => {  // Accion a disparar cuando el componente se desmonte
            isMounted.current = false;
        }
    }, []);

    useEffect( () => {

        // Para que el loading se muestre antes de cada peticion
        setState({ data: null, error: null, loading: true });

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                // Se coloca un timeout para intencionalmente provocar un error
                // en el renderizado al usar el boton show/hide
                setTimeout( () => {

                    if ( isMounted.current ){
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    } else {
                        console.log('setState no se llamó para el renderizado');
                    }

                }, 3000);

            });

    }, [url]);

    return state;

}
