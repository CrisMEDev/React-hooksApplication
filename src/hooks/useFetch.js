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

                if ( isMounted.current ){
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                } else {
                    console.log('setState no se llamó para el renderizado');
                }

            }).catch( () => {
                setState({ data: null, error: 'No se cargó la info', loading: false });
            });

    }, [url]);

    return state;

}
